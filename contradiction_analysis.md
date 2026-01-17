# ARES Website Contradiction Analysis

## Core Contradiction

**About Page "What We Don't Do" Section** states:
- Build autonomous AI systems for clients
- Fine-tune or deploy client production models
- Develop AI systems
- Provide legal advice
- Issue compliance certifications

**BUT the site extensively references:**

### 1. Governance GPTs (Multiple Pages)
- Contact Page: "Our governance GPTs — including the Nephilim Governance GPT"
- AIDevelopment Page: Entire page dedicated to "Governance LLM Services"
- Contact Page: Service options include "Custom Governance GPTs", "Nephilim Governance GPT"

### 2. Custom LLM Development References
- Analytics.tsx: "Custom LLM Development" as a service
- Booking.tsx: "Custom LLM Development" in service list
- ClientPortal.tsx: "Custom LLM Development" project
- FAQ.tsx: "What types of AI systems do you build? We develop custom LLMs..."

### 3. AI Development Services
- FAQ.tsx: Entire section titled "AI Development Services"
- Services.tsx: Has a "Not Offered" section for AI Development Services

## Resolution Strategy

ARES **DOES** provide Governance GPTs (policy-enforced, constrained LLM interfaces), but these are:
1. NOT autonomous AI systems
2. NOT general-purpose model development
3. NOT fine-tuning or deploying production models
4. Advisory/evaluation tools with human oversight

**Correct Positioning:**
- ARES provides **governance-scoped LLM access** (pre-configured GPT instances with governance constraints)
- ARES does NOT develop/train/fine-tune base models
- ARES does NOT build autonomous AI systems
- ARES does NOT deploy client production models

## Files Requiring Updates

### High Priority - Remove Contradictions:
1. **About.tsx** - Update "What We Don't Do" to clarify the distinction
2. **FAQ.tsx** - Remove "AI Development Services" section, reframe LLM questions
3. **Analytics.tsx** - Change "Custom LLM Development" to "Governance GPT Access"
4. **Booking.tsx** - Change service name
5. **ClientPortal.tsx** - Change project name

### Medium Priority - Clarify Language:
6. **Contact.tsx** - Already correct, but could be clearer
7. **AIDevelopment.tsx** - Already mostly correct, minor clarifications
8. **Pricing.tsx** - Already correct terminology

## Recommended Terminology Changes

**Replace:**
- "Custom LLM Development" → "Governance GPT Access"
- "AI Development Services" → "Governance LLM Services"
- "Build AI systems" → "Configure governance-scoped GPT instances"

**Clarify:**
- Governance GPTs are pre-configured access to third-party LLMs (OpenAI, etc.) with ARES governance layers
- Not model training/fine-tuning
- Not autonomous systems
- Advisory tools requiring human oversight