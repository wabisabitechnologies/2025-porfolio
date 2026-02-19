<svelte:head>
	<title>Simple Formations – Case Study · Alex Cosmas</title>
	<meta
		name="description"
		content="Four years of product leadership, UX, and engineering bridging on a compliance platform for professionals in Kenya."
	/>
</svelte:head>

<div class="min-h-screen bg-white text-slate-900">
	<div class="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 space-y-12">
		<header class="space-y-4">
			<p class="text-xs uppercase tracking-[0.3em] text-slate-400">Case study</p>
			<h1 class="text-3xl font-semibold leading-snug sm:text-4xl">
				Simple Formations – Product leadership from concept to compliance platform
			</h1>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Over four years at Simple Formations, I went from UX developer to product lead on a platform that
				helps industry professionals automate company formation and stay compliant in Kenya. This case study
				shares how the product, my role, and the underlying systems evolved over time.
			</p>
		</header>

		<section class="grid gap-8 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:items-start">
			<div class="space-y-4">
				<h2 class="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
					Project snapshot
				</h2>
				<p class="text-sm sm:text-base text-slate-600 leading-relaxed">
					I joined when Simple Formations was still a rough concept. A small group of us took scattered
					legal workflows and turned them into a working product. As the platform matured, my role shifted
					from hands-on execution to setting direction: shaping the information architecture, defining
					priorities, and connecting engineering, design, and compliance so we could ship real features
					under real constraints.
				</p>
			</div>

			<div
				class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs sm:text-sm text-slate-600"
			>
				<div class="flex gap-4">
					<div class="w-28 text-slate-400">Role</div>
					<div class="flex-1">
						Product Lead (previously UX Developer). Responsible for product direction, UX, IA, and
						bridging design, engineering, and compliance.
					</div>
				</div>
				<div class="flex gap-4">
					<div class="w-28 text-slate-400">Timeline</div>
					<div class="flex-1">2020 – 2024</div>
				</div>
				<div class="flex gap-4">
					<div class="w-28 text-slate-400">Team</div>
					<div class="flex-1">
						Founders, engineering, and compliance/ops. I worked across groups as the product matured and
						the team changed.
					</div>
				</div>
				<div class="flex gap-4">
					<div class="w-28 text-slate-400">Context</div>
					<div class="flex-1">
						Regulated environment, multiple agencies, evolving rules, and a lean team shipping in stages.
					</div>
				</div>
			</div>
		</section>

		<section class="space-y-5">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">Role evolution</h2>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				My responsibilities changed as the platform grew. I started in the work, then moved into system
				thinking and product leadership.
			</p>
			<div class="grid gap-6 sm:grid-cols-3">
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
						Year 1–2 · Execution
					</p>
					<ul class="space-y-1 text-sm text-slate-600">
						<li>Built early interfaces and flows from scratch.</li>
						<li>Turned ideas into usable product features.</li>
						<li>Worked closely with engineering to ship first versions.</li>
					</ul>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
						Year 2–3 · UX architecture
					</p>
					<ul class="space-y-1 text-sm text-slate-600">
						<li>Mapped user journeys across formation, filings, and account management.</li>
						<li>Defined the information architecture tying flows together.</li>
						<li>Standardized patterns so new features felt part of one system.</li>
					</ul>
				</div>
				<div class="space-y-2">
					<p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
						Year 3–4 · Product leadership
					</p>
					<ul class="space-y-1 text-sm text-slate-600">
						<li>Set product direction and priorities with founders.</li>
						<li>Connected engineering, design, and compliance around shared goals.</li>
						<li>Focused on creating clarity so the team could deliver.</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="space-y-5">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">Problem and constraints</h2>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Starting and running a company in Kenya involves multiple agencies, shifting regulations, and
				paperwork that is often opaque to the people doing the work. Our users were industry professionals
				responsible for getting details right under time pressure, not casual consumers.
			</p>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				We needed to design a platform that encoded complex legal workflows without hiding important details,
				kept companies compliant as rules changed, and respected how operations teams actually worked day to
				day. All under resource constraints typical of an early-stage product.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">Product surface and UX architecture</h2>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Over time, Simple Formations grew into a set of connected modules rather than isolated flows:
			</p>
			<ul class="grid gap-4 text-sm sm:text-base text-slate-600 sm:grid-cols-2">
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Company formation</p>
					<p>Create new entities with guided flows that respect local rules and required documents.</p>
				</li>
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Director and shareholder management</p>
					<p>Update control and ownership with traceability for internal teams and regulators.</p>
				</li>
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Filings and renewals</p>
					<p>Track and submit recurring obligations so companies stay compliant over time.</p>
				</li>
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Compliance reminders and notifications</p>
					<p>Surface upcoming deadlines in a way that fits how professionals manage their clients.</p>
				</li>
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Internal tools for operations</p>
					<p>Give ops teams workflows and status views that match their daily routines and edge cases.</p>
				</li>
				<li class="space-y-1">
					<p class="font-medium text-slate-900">Billing and account management</p>
					<p>Handle plans, invoicing, and access in a way that does not fight the core workflows.</p>
				</li>
			</ul>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Early on, a lot of work happened as ad-hoc flows. My job was to turn those into a coherent product:
				deciding what belongs where, how professionals move between tasks, and how to make room for new
				workflows without breaking what already worked.
			</p>
		</section>

		<section class="space-y-6">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">Key flows</h2>

			<div class="space-y-4">
				<h3 class="text-lg sm:text-xl font-semibold text-slate-900">New company formation</h3>
				<div class="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
					<p>
						<strong class="font-semibold text-slate-900">Goal:</strong> Make incorporating a company
						predictable for professionals while respecting local legal requirements.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">Challenges:</strong> Multiple steps across
						agencies, edge cases known only to ops and legal, and rules that evolved over the life of the
						product.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">What I did:</strong> Mapped the end-to-end
						journey from the professional’s point of view, worked with compliance to separate what could be
						automated from what needed manual checks, and designed a step-by-step flow that surfaced key
						decisions early while keeping status clear for both clients and ops.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">Outcome:</strong> A single, trackable flow
						instead of scattered updates, reduced back-and-forth for standard cases, and a foundation we
						could extend to new entity types without redesigning from scratch.
					</p>
				</div>
			</div>

			<div class="space-y-4">
				<h3 class="text-lg sm:text-xl font-semibold text-slate-900">Ongoing compliance and filings</h3>
				<div class="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
					<p>
						<strong class="font-semibold text-slate-900">Goal:</strong> Help professionals keep companies
						compliant without relying on personal memory and scattered reminders.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">Challenges:</strong> Different filing schedules
						and requirements, penalties for late submissions, and existing workflows spread across
						spreadsheets and email.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">What I did:</strong> Worked with ops to catalogue
						recurring obligations and their triggers, designed a compliance calendar and reminder model that
						fit how professionals think about their clients, and integrated this into the platform so tasks
						felt like part of the same system.
					</p>
					<p>
						<strong class="font-semibold text-slate-900">Outcome:</strong> A single place to see
						obligations and statuses by company, clearer upcoming deadlines for professionals and ops, and
						groundwork for deeper automation.
					</p>
				</div>
			</div>
		</section>

		<section class="space-y-5">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">
				Bridging teams and leading through clarity
			</h2>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				As the platform grew, my main job became creating clarity across disciplines.
			</p>
			<ul class="space-y-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
				<li>
					<strong class="font-semibold text-slate-900">With engineering:</strong> Translated workflows into
					buildable units, negotiated scope when constraints were tight, and stayed close enough to the code
					to keep conversations grounded.
				</li>
				<li>
					<strong class="font-semibold text-slate-900">With compliance and legal:</strong> Turned dense rules
					into flows and edge cases we could design and test for, instead of treating them as one-off tickets.
				</li>
				<li>
					<strong class="font-semibold text-slate-900">With operations:</strong> Listened to how work
					actually happened, including all the messy exceptions, and fed that back into both design and
					implementation.
				</li>
			</ul>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Not every feature worked the first time. We launched, watched where professionals or ops got stuck,
				and iterated. That rhythm of ship → observe → adjust is what moved the product from zero to something
				teams could rely on.
			</p>
		</section>

		<section class="space-y-5">
			<h2 class="text-xl sm:text-2xl font-semibold text-slate-900">Outcomes and what’s next</h2>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				Over four years we went from an idea on paper to a platform that industry professionals use to start
				and run companies with more confidence and less friction.
			</p>
			<ul class="space-y-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
				<li>Consolidated fragmented manual steps into a set of clear flows and tools.</li>
				<li>Gave professionals and ops a shared source of truth for company state and obligations.</li>
				<li>Built a product foundation that can grow as regulations and services evolve.</li>
			</ul>
			<p class="max-w-3xl text-sm sm:text-base text-slate-600 leading-relaxed">
				If I were to extend this work further, I would focus on surfacing more real-time insights back to
				professionals, deepening self-serve capabilities where regulation allows, and continuing to tighten
				the feedback loop between usage, ops, and product decisions.
			</p>
		</section>
	</div>
</div>

