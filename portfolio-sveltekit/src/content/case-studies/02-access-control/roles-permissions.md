# Roles & Permissions: One System, Every Stakeholder

## Business Context: The Governance Coordination Challenge

In Kenya, corporate governance is a shared responsibility. A typical registered company operates with:
- **Directors** who make strategic decisions
- **Shareholders** who own equity and vote on major matters
- **Company Secretaries** who maintain compliance records
- **Accountants** who manage financials
- **Lawyers** who provide advisory

Under Kenya's Companies Act and CBK regulations, these stakeholders must work together seamlessly—but without the right tools, this coordination becomes chaotic. Who can approve a director's resignation? Who updates the share register? Who verifies beneficial ownership changes?

**The Traditional Problem:**
- Manual tracking: "Who has sign-off authority on this decision?"
- Email chains: "Did the accountant see the latest share structure?"
- Scattered permissions: Each system manages access differently
- Compliance risk: No clear audit trail of who approved what, when

---

## The Practitioner's Challenge

A company secretary managing 5 active companies faces this daily:
- Director A wants to transfer shares → Who can approve? Is the secretary notified?
- Accountant needs annual share structure → Who maintains the current register?
- New beneficial owner verification required → Who initiates? Who confirms?
- Auditor requests historical changes → Where's the permission log?

**Time Impact:** 30-40% of a secretary's week is spent clarifying permissions, chasing approvals, and maintaining manual matrices of "who can do what."

**Compliance Risk:** Without clear role definitions, companies breach the Companies Act requirement for proper governance—leading to CBK fines (KES 100,000+) or license suspension for regulated entities.

---

## How SFL Solves It: Governance as a Permission Model

SFL treats roles and permissions not as a checkbox, but as the **backbone of governance structure**. Instead of each stakeholder guessing their authority, the system enforces governance rules automatically.

### **The Architecture:**

**Five Core Roles:**
1. **VOR (View-Only Role):** Shareholders/external stakeholders. Can see relevant data only (their shareholding, resolutions affecting them).
2. **UPLOADER:** Can initiate transactions and upload supporting documents. Typical: Director changing company details.
3. **REVIEWER:** Can examine proposed changes before approval. Typical: Company secretary reviewing share transfers for compliance.
4. **APPROVER:** Can sign off on changes (director/shareholder consent). Final decision-maker.
5. **REGISTRAR:** Full system access. Maintains all records. Typical: Compliance officer or SFL administrator.

**Role Assignment by Designation:**
- **Director** → Typically UPLOADER + APPROVER (can initiate and sign off on director actions)
- **Shareholder** → Typically VOR + APPROVER (can see their shares, approve shareholder resolutions)
- **Joint Shareholder** → VOR + REVIEWER + APPROVER (must coordinate with co-owners)
- **Company Secretary** → REGISTRAR (maintains everything, enforces compliance)

**Document-Level Permissions:**
The system enforces access to specific registers:
- Register of Directors & Secretaries (Who can edit?)
- Register of Members/Share Ledger (Who can modify shareholding?)
- Register of Beneficial Owners (Who can update ownership?)
- Director/Shareholder Resolutions (Who can see confidential decisions?)

### **Why This Works:**

1. **Automatic Enforcement:** Once a director tries to approve a share transfer, the system checks: "Does this director have APPROVER role for share transfers?" No guessing.
2. **Scalable Delegation:** New director joins? Assign the pre-built DIRECTOR role template. Permissions flow automatically.
3. **Audit Trail Built-In:** Every action is logged with user, role, timestamp, and permission level used. When the auditor asks "who changed the share register?", the answer is instant.
4. **Reduced Manual Overhead:** Practitioners don't manage permissions per person—they manage role templates per designation. 1 template = 10+ people benefiting.

---

## Value for Clients

**Speed:**
- Onboarding a new director: 5 minutes (assign DIRECTOR role) vs. 2 days (manual permission matrix + email updates)
- Approving a share transfer: Automatic notification to approvers with clear authority. No "is it my job?" moments.

**Safety:**
- A junior employee can't accidentally delete the beneficial ownership register (REGISTRAR role required)
- Shareholders can only see resolutions relevant to them (role-based data filtering)
- Auditors have instant proof of who approved what (immutable permission logs)

**Compliance:**
- Companies Act requires clear governance documentation → SFL permission model IS the documentation
- CBK beneficial ownership tracking → System ensures only authorized people can modify ownership records
- Annual compliance reviews → All historical changes are timestamped with approver identity

---

## Value for Practitioners

**Scalability:**
- Manage 50 companies' permissions without hiring extra staff
- New company template setup: "Copy roles from similar company" → Done
- Update permission rules company-wide: 1 change in system = applies to all users at that company

**Professional Credibility:**
- Client asks: "Who approved this director change?" → You show the system's audit trail (impressed by governance rigor)
- During compliance audit: "Here's the permission matrix" → System-generated, timestamped, perfect documentation
- CBK inquiry about beneficial ownership: "Here's who verified it, when, and what they confirmed" → No scrambling

**Time Reclaimed:**
- No more spreadsheets tracking "Does Priya have access to the minute book?"
- No more emails asking "Is this person a director or just a shareholder?"
- Focus on advisory work, not permission administration

---

## Technical Achievement: What Makes This Possible

The system maintains a unified permission architecture across:
- **Frontend Access Control:** React components check permissions before rendering sensitive data
- **Backend Validation:** Every API endpoint validates the user's role + permission combination
- **Database Layer:** Permissions are stored as immutable logs (who changed what, when, under which role)
- **Notification Engine:** Permission changes automatically trigger notifications to affected stakeholders

**Example Real-world Impact:**
- Adding "NEW DIRECTOR" to a company: System automatically grants that person VOR role (can see their info), notifies them of their status, and alerts the company secretary to set their full role designation.
- Removing a shareholder: System revokes all permissions, logs the action, notifies the user (they're no longer a shareholder), and updates all related registers.

---

## Why This Positions SFL as Practitioner's Champion

Unlike BRS (regulatory filing portal) which is about **compliance submission**, SFL's permission model is about **governance operation**. 

Practitioners think: *"How do we manage who can do what every day?"*  
SFL answers: *"Through role-based permission templates that scale with your business."*

This is not compliance as a burden. This is governance as business logic.

---

## Client Story: The Impact

**Before SFL:**
- Company has 3 directors. Need to update bank signatories.
- Secretary creates email thread with directors, accountant, and lawyer.
- Each person has different versions of "who approved this."
- Takes 5 days to coordinate.
- No timestamped proof for auditors.

**With SFL:**
- Director A logs in, updates signatories (UPLOADER permission).
- System automatically routes to Director B and C for approval (both have APPROVER role).
- Director B approves in 2 hours, Director C approves next day.
- Secretary gets notification of approval status in real-time.
- Update complete in 36 hours.
- System shows: Director A proposed (timestamp), Director B approved (timestamp), Director C approved (timestamp).
- Auditor reviews: Perfect governance trail.

**Outcome:**
- 60% faster decision-making
- Zero ambiguity on authority
- Compliance is a side effect of normal operations, not a separate project

