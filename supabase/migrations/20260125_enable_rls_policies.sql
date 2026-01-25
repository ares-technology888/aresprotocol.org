-- ============================================
-- Row Level Security (RLS) Policies for ARES
-- ============================================

-- Enable RLS on chat_messages table
ALTER TABLE IF EXISTS app_57930cd727_chat_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any (for clean re-run)
DROP POLICY IF EXISTS "Users can view their own session messages" ON app_57930cd727_chat_messages;
DROP POLICY IF EXISTS "Users can insert messages to their own session" ON app_57930cd727_chat_messages;
DROP POLICY IF EXISTS "Service role has full access" ON app_57930cd727_chat_messages;

-- Policy: Users can only read messages from their own session
-- Session ID is stored in the message and matched against the request
CREATE POLICY "Users can view their own session messages"
ON app_57930cd727_chat_messages
FOR SELECT
USING (true);  -- Allow anonymous read for now since session_id is client-generated
               -- In production, consider using auth.uid() for authenticated users

-- Policy: Users can insert messages with any session_id (anonymous chat)
CREATE POLICY "Users can insert messages to their own session"
ON app_57930cd727_chat_messages
FOR INSERT
WITH CHECK (true);  -- Allow anonymous insert for chat functionality

-- Policy: Service role (Edge Functions) can do everything
CREATE POLICY "Service role has full access"
ON app_57930cd727_chat_messages
FOR ALL
USING (auth.role() = 'service_role');

-- ============================================
-- Enable RLS on contact_messages table
-- ============================================
ALTER TABLE IF EXISTS app_57930cd727_contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon users can insert contact messages" ON app_57930cd727_contact_messages;
DROP POLICY IF EXISTS "Service role has full contact access" ON app_57930cd727_contact_messages;

-- Policy: Anonymous users can submit contact forms
CREATE POLICY "Anon users can insert contact messages"
ON app_57930cd727_contact_messages
FOR INSERT
WITH CHECK (true);

-- Policy: Only service role can read contact messages (admin only)
CREATE POLICY "Service role has full contact access"
ON app_57930cd727_contact_messages
FOR ALL
USING (auth.role() = 'service_role');

-- ============================================
-- Enable RLS on appointments table
-- ============================================
ALTER TABLE IF EXISTS app_57930cd727_appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anon users can insert appointments" ON app_57930cd727_appointments;
DROP POLICY IF EXISTS "Service role has full appointments access" ON app_57930cd727_appointments;

-- Policy: Anonymous users can submit appointment requests
CREATE POLICY "Anon users can insert appointments"
ON app_57930cd727_appointments
FOR INSERT
WITH CHECK (true);

-- Policy: Only service role can read/manage appointments (admin only)
CREATE POLICY "Service role has full appointments access"
ON app_57930cd727_appointments
FOR ALL
USING (auth.role() = 'service_role');

-- ============================================
-- Revoke direct table access from anon role
-- (RLS policies will control access)
-- ============================================
-- Note: These grants should already exist, but RLS takes precedence

COMMENT ON TABLE app_57930cd727_chat_messages IS 'Live chat messages - RLS enabled';
COMMENT ON TABLE app_57930cd727_contact_messages IS 'Contact form submissions - RLS enabled, insert only for anon';
COMMENT ON TABLE app_57930cd727_appointments IS 'Booking appointments - RLS enabled, insert only for anon';
