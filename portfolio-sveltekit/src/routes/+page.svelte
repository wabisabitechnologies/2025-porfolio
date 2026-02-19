<script lang="ts">
	export let data;
	const { home } = data;
</script>

<svelte:head>
	<title>{home.title}</title>
	<meta name="description" content={home.summary} />
</svelte:head>

<div class="min-h-screen bg-white text-slate-900">
	<div class="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
		<header class="flex items-center justify-between gap-4">
			<div class="flex items-center gap-3">
				<img
					src={home.profilePhoto}
					alt={`Portrait of ${home.name}`}
					class="h-12 w-12 rounded-full object-cover shadow-lg ring-4 ring-white"
				/>
				<div>
					<p class="text-lg font-semibold text-slate-900">{home.name}</p>
					<p class="text-sm text-slate-500">{home.title}</p>
				</div>
			</div>

			<nav class="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
				{#each home.navigation as item}
					<a href={item.href} class="hover:text-slate-900">
						{item.label}
					</a>
				{/each}
			</nav>
		</header>

		<section class="mt-8 space-y-6">
			<div class="space-y-5">
				<h1
					class="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] sm:leading-snug break-words"
				>
					{home.title}
				</h1>
				<p class="text-base sm:text-lg text-slate-600 break-words">
					{home.summary}
				</p>
				<ul class="space-y-1 text-sm sm:text-base text-slate-500">
					{#each home.roles as role}
						<li class="break-words">{role}</li>
					{/each}
				</ul>
			</div>

			<div class="flex flex-wrap gap-3">
				{#each home.cta as action}
					<a
						href={action.href}
						class="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
					>
						{action.label}
					</a>
				{/each}
			</div>

			<div class="prose prose-slate max-w-none text-sm sm:text-base text-slate-500 break-words">
				{@html home.bodyHtml}
			</div>
		</section>

		<section class="mt-12 sm:mt-16">
			<h2 class="text-xs uppercase tracking-[0.3em] text-slate-400 mb-6 sm:mb-8">Focus Areas</h2>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
				<div class="space-y-4">
					<h3 class="text-lg sm:text-xl font-semibold text-slate-900 flex items-center gap-2">
						<span class="inline-flex h-2 w-2 rounded-full bg-slate-900"></span>
						IC Work
					</h3>
					<ul class="space-y-3">
						{#each home.focusAreas.icWork as item}
							<li
								class="text-sm sm:text-base text-slate-600 leading-relaxed break-words pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full"
							>
								{item}
							</li>
						{/each}
					</ul>
				</div>

				<div class="space-y-4">
					<h3 class="text-lg sm:text-xl font-semibold text-slate-700 flex items-center gap-2">
						<span class="inline-flex h-2 w-2 rounded-full bg-slate-400"></span>
						Leadership Work
					</h3>
					<ul class="space-y-3">
						{#each home.focusAreas.leadershipWork as item}
							<li
								class="text-sm sm:text-base text-slate-600 leading-relaxed break-words pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:bg-slate-300 before:rounded-full"
							>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="mt-16 sm:mt-20">
			<div class="space-y-2 mb-8">
				<h2 class="text-xs uppercase tracking-[0.3em] text-slate-400">Featured Project</h2>
				<p class="text-sm sm:text-base text-slate-500 max-w-3xl break-words">
					{home.featuredIntro}
				</p>
			</div>

			<a
				href="/work/simple-formations"
				class="group block border border-slate-200 rounded-lg overflow-hidden hover:border-slate-300 transition-colors"
			>
				<div class="flex flex-col lg:flex-row">
					<div class="lg:w-2/3 w-full bg-slate-50">
						<img
							src="https://framerusercontent.com/images/fqyjCDbGm7R1AekelRPdY1744.webp?width=1600"
							alt="Simple Formations Platform"
							class="w-full h-full object-cover aspect-video lg:aspect-auto lg:min-h-[400px]"
						/>
					</div>

					<div class="lg:w-1/3 w-full p-6 sm:p-8 flex flex-col justify-between space-y-6">
						<div class="space-y-4">
							<div class="space-y-2">
								<h3
									class="text-xl sm:text-2xl font-semibold text-slate-900 break-words group-hover:text-slate-700 transition-colors"
								>
									Simple Formations
								</h3>
								<p class="text-sm uppercase tracking-wider text-slate-500">
									Automation
								</p>
							</div>

							<p class="text-sm sm:text-base text-slate-600 leading-relaxed break-words">
								Enterprise platform enabling thousands of businesses to stay compliant, manage filings, and
								scale operations with confidence.
							</p>
						</div>

						<div
							class="flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-slate-700 transition-colors"
						>
							View Project
							<span class="text-lg transition-transform group-hover:translate-x-1">→</span>
						</div>
					</div>
				</div>
			</a>
		</section>

		<section class="mt-8 sm:mt-12">
			<div
				class="border border-slate-200 rounded-lg p-6 sm:p-8 space-y-4 hover:border-slate-300 transition-colors bg-slate-50"
			>
				<h3 class="text-xl sm:text-2xl font-semibold text-slate-900">All Projects</h3>
				<p class="text-sm sm:text-base text-slate-600 leading-relaxed break-words">
					A collection of systems, prototypes, and product work shipped across SaaS, enterprise, and
					community platforms.
				</p>
				<div class="pt-2">
					<a
						href="/work"
						class="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
					>
						View all projects
						<span class="text-lg">→</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</div>
