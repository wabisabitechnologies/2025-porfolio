# Request Access: Self-Service Permissions, No Admin Bottleneck

## Business Context: The Permission Paradox

Companies need to control who has access to sensitive data (financial records, director resolutions, beneficial ownership). But traditional access control creates bottlenecks:
- **CEO needs new report** → Email IT admin → Wait 2-3 days → Admin manually grants access
- **Accountant joins team** → Email to multiple people (CEO, secretary, lawyer) → Who actually grants access? → Inconsistent permissions
- **Shareholder wants shareholding proof** → CEO checks, manually emails → Not in system, needs to be assembled
- **Auditor needs specific registers** → Manual extraction, email, security concerns

**The Problem:**
- Access control is *reactive* (someone must manually grant access)
- Permission grants are *inconsistent* (depends on who you ask)
- Audit trail is *missing* (no record of who approved access, when)
- Escalation is *manual* (no workflow for "I need higher access level")

**Result:** Either security is too loose (everyone has access to everything) or access is too tight (people stuck without needed data).

---

## The Practitioner's Challenge: The Permission Bottleneck

Scenario: A new CFO joins a company. What access do they need?

**Traditional Process:**
1. CEO emails company secretary: "Grant new CFO access to [financial registers, shareholder info, approved budgets]"
2. Secretary responds: "Which financial registers? What about beneficial ownership data?"
3. CEO emails lawyer: "Should CFO see confidential resolutions?"
4. Lawyer responds: "Only board resolutions, not shareholder confidential matters"
5. Secretary grants access (some registers yes, some no, some forgotten)
6. CFO discovers they don't have access to something they need (1 day wasted)
7. Email chain again: "Grant this register too"
8. Result: Took 4-5 days to get one person properly set up

**For 50-company practitioners:**
- Managing permissions for 500+ people across 50 companies = massive overhead
- No clear audit trail of "who has access to what?"
- Regulatory auditor asks: "Who accessed the beneficial ownership register?" → No way to know
- Former employee still has access → No one remembers to revoke it

---

## How SFL Solves It: Self-Service Access Requests with Smart Approval

SFL enables **"I need this permission" → System routes to right approver → Access granted + audited** in hours, not days.

### **The Self-Service Request Workflow:**

**1. Employee Needs Access**

A new CFO logs into SFL:
- System shows: "Limited access - You can see your own data only"
- System suggests: "For your role (CFO), you might need access to: [Financial registers, Share structure, Shareholder information]"
- CFO clicks: "Request access to Financial Registers"
- System asks: Why do you need this? (Optional explanation, for approval context)

**2. System Identifies Right Approver**

System determines: "Who can approve CFO access to financial registers?"
- Check company articles: "CFO access approved by Board" or "By CEO" or "By Audit Committee"?
- Check existing permissions: Who currently has APPROVER role for financial registers?
- Auto-route to: CEO or designated financial approver

**System determines if request is:**
- **Standard** (CFO requesting typical CFO data) → Auto-approval possible
- **Escalated** (CFO requesting director resolutions) → Requires higher approval

**3. Approval Workflow**

Approver (e.g., CEO) receives notification:
- "CFO has requested access to: Financial Registers, Share Structure"
- Explanation: "I need this to manage company finances and capital planning"
- One-click options: "Approve" / "Partially Approve" / "Deny with explanation" / "Request clarification"

CEO approves: System grants access instantly.

**4. Access Granted + Logged**

CFO now sees:
- Financial Registers (timestamped entry date: Jan 15, 10:30 AM)
- Share Structure (timestamped entry date: Jan 15, 10:30 AM)
- System shows: "Access approved by CEO on Jan 15"

Audit log records:
- Who requested access? CFO
- What was requested? Financial registers, share structure
- Who approved? CEO (timestamp, role used)
- When granted? Jan 15, 10:30 AM

**5. Permission Changes Managed**

If CFO leaves company:
- HR revokes access (one action in system)
- System automatically: Removes financial register access, removes share data access, logs revocation (timestamp + who revoked)
- Audit trail shows: "CFO access revoked Jan 31 by HR"

---

## Value for Clients

**Speed:**
- Access request that took 4-5 days → Now takes 2-4 hours (approver just approves, system handles rest)
- New employee onboarding → No access delays (request + approval happens in parallel with paperwork)
- Compliance audits → Instant answer to "who has access to X?" and "when did access change?"

**Security:**
- Access is systematic (not ad-hoc "I'll email Sarah the files")
- Audit trail is automatic (full history of who approved, when, for what)
- Access removal is reliable (no forgotten users with access to sensitive data)
- Regulatory proof → "Here's full access history for the beneficial ownership register"

**Flexibility:**
- Standard roles (CFO, accountant, auditor) have pre-built permission templates
- Custom requests handled smoothly (request + approval, documented)
- Permission escalation is clear (can't access something? Request higher level → System routes to appropriate approver)

---

## Value for Practitioners

**Time Reclaimed:**
- Managing employee access → No more ad-hoc emails + manual permission setting
- Onboarding → New employee in role-appropriate access in 2 hours vs. 2-3 days
- Permission audits → System exports complete access history (vs. manually compiling emails)
- Offboarding → One action (revoke access) vs. emailing multiple people

**Professional Standards:**
- Access is documented (can prove compliance)
- Audit trail is immutable (not "I think Sarah had access sometime last year")
- Permission matrix is transparent (employees can see what they have + what they can request)
- Regulatory confidence → "Our access control is systematic and auditable"

**Risk Mitigation:**
- Unauthorized access: Impossible (system validates every access)
- Forgotten access: Managed (access expires/renews on schedule)
- Audit compliance: Automatic (full access history available on demand)
- Insider risk: Tracked (who accessed what + when, useful for investigation if needed)

---

## Technical Achievement: Smart Permission Routing

**Key Innovation:** System understands:

1. **Role-based needs:**
   - CFO typically needs: Financial registers, share structure, shareholder info
   - Accountant typically needs: Share ledger, capital structure, allotments
   - Director typically needs: All board information, shareholder resolutions relevant to them
   - Shareholder typically needs: Only their shareholding, resolutions affecting them

2. **Approval routing:**
   - "Who can approve this permission grant?" → System checks articles + existing approvers → Routes automatically

3. **Permission hierarchies:**
   - VIEW_OWN_DATA < VIEW_PUBLIC_DATA < VIEW_RESTRICTED_DATA
   - Can't request restricted data without justification (system enforces)
   - Some data requires higher approval than others (system knows)

4. **Expiration rules:**
   - Temporary access: "Auditor needs beneficial owner register for 2 weeks" → Auto-expires
   - Permanent access: "New CFO needs financial data" → No expiration
   - System alerts: "CFO's auditor access expires in 3 days"

---

## Beneficial Ownership Transparency: Who Can See What?

**Sensitive Case:** Beneficial ownership register contains confidential information.

**Traditional Problem:**
- Who should see beneficial owner data? (Directors? Accountants? Shareholders?)
- How to prevent information leakage?
- Shareholder wants to know "Am I registered as BO?" but shouldn't see other beneficial owners

**SFL's Solution:**

Access levels for beneficial ownership:
- **Own Data:** Shareholder can see only their BO status (are you registered?)
- **Company Data:** Directors/secretaries can see all BO registrations (governance view)
- **Regulatory Data:** CEO/auditor can see BO structure (required for compliance)
- **CBK Data:** If regulated, CBK can see BO data (regulatory requirement)

**Each access type is logged:**
- When did shareholder view their own BO status? (Timestamp logged)
- When did director review BO register? (Timestamp + director name logged)
- When did auditor export BO data? (Timestamp + export details logged)

**Compliance proof:**
- "We properly control access to sensitive beneficial ownership data"
- "Only authorized personnel can view complete BO register"
- "All access is timestamped and auditable"

---

## Real-World Scenarios: Request Access in Action

**Scenario 1: New Employee Onboarding**

```
Day 1: New accountant joins
- HR adds accountant to system with basic access (view-only)
- Accountant can see: Public company info only

Day 1, 2 hours later:
- Accountant needs share structure for accounting records
- Clicks "Request Access" → Select "Share Ledger & Members Register"
- System routes to Finance Manager (has APPROVER role for accounting data)
- Finance Manager approves in 5 minutes
- Accountant now sees share ledger + members register (timestamped)

Day 2:
- Auditor arrives for year-end audit
- Requests access to: All registers, board minutes, financial documents
- System routes to CEO (highest approver)
- CEO approves: "Auditor access, valid through Jan 31"
- Auditor access expires automatically on Feb 1

Total time: Accountant fully set up Day 1 afternoon, auditor set up Day 2 morning
No delays in operations
Full audit trail of all access changes
```

**Scenario 2: Access Escalation**

```
Shareholder A wants to verify: "How much do I own? Am I registered as BO?"

Day 1:
- Shareholder logs into SFL
- Can see: Own shareholding (500 shares), own BO status (verified)
- Cannot see: Other shareholders' data

Day 5:
- Shareholder A wants to understand: "What changed in shareholding this year?"
- Clicks "Request Access" → "Shareholding history (last 12 months)"
- System routes to Company Secretary (has REGISTRAR role)
- Secretary approves: "Granted for 30 days for AGM preparation"
- Shareholder A now sees: All share transfers (only own shares tracked), historical changes

Total: Shareholder gets what they need, system protects other shareholders' privacy
```

**Scenario 3: Access Revocation**

```
Former CFO leaves company on Jan 31

Day 1:
- HR revokes CFO access in system (one action)
- System immediately: Removes financial register access, removes director memo access, removes shareholder resolution access
- System logs: "CFO access revoked Jan 31, 2:30 PM by HR Manager"

Compliance benefit:
- No access persistence ("Did anyone revoke access?")
- Audit trail is automatic
- Regulatory inquiry: "Who had access to financial data on Jan 30?" → System shows former CFO (access revoked next day)
```

---

## Why This Positions SFL as Practitioner's Champion

Practitioners think: *"How do we grant permissions without creating a security nightmare or admin bottleneck?"*

SFL answers: *"Self-service requests + smart approval routing = Fast, secure, and auditable."*

This transforms permission management from **"Manual admin task"** to **"Automatic governance control"**.

---

## Client Story: The Transformation

**Before SFL:**
- Company of 50 people, 5 companies
- New CFO joins
- HR emails company secretary: "Please give new CFO access to financial data"
- Secretary emails: "Which accounts? Which companies? Which data specifically?"
- 2-day clarification loop
- Secretary manually sets access in spreadsheet + emails links
- CFO gets access but misses some needed data (1-day delay)
- Email chain: "Need access to X too"
- Year later: Auditor asks "Who has access to beneficial owner data?" → Secretary manually compiles list from emails/memory
- Former CFO still has access from 2 years ago (nobody revoked it)
- Total access management overhead: ~5 hours per employee × 50 people = 250 hours per year

**With SFL:**
- New CFO joins
- HR adds CFO to system with basic access (CFO requests what they need)
- CFO clicks: "Request access to financial registers + beneficialowner data"
- System suggests: "Based on your role, you might also need: Share structure"
- CEO approves request in 5 minutes
- CFO has full access within 1 hour of request
- System logs: Approval timestamp, approver, what was approved
- Year later: Auditor asks "Who has access?" → System generates report instantly
- When CFO leaves: HR revokes access (one action) → System automatically removes all permissions
- Total access management overhead: ~5 minutes per employee × 50 people = 250 minutes per year (95% reduction)

**Outcome:**
- 90% reduction in access management time
- Zero access delays (hours instead of days)
- Perfect audit trail
- Secure (no lingering access, no manual errors)
- Compliant (all access is documented and approved)

