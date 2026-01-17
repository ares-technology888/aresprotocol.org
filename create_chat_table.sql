BEGIN;

CREATE TABLE IF NOT EXISTS app_138c0b9c8f_chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  sender TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX IF NOT EXISTS chat_messages_session_idx ON app_138c0b9c8f_chat_messages(session_id);
CREATE INDEX IF NOT EXISTS chat_messages_created_idx ON app_138c0b9c8f_chat_messages(created_at DESC);

ALTER TABLE app_138c0b9c8f_chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_read_all_messages" ON app_138c0b9c8f_chat_messages FOR SELECT USING (true);
CREATE POLICY "allow_insert_all_messages" ON app_138c0b9c8f_chat_messages FOR INSERT WITH CHECK (true);

COMMIT;
