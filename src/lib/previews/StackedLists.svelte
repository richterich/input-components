<script>
	import ProfileCard from '$lib/previews/ProfileCard.svelte';
	import ProfileStatus from '$lib/previews/ProfileStatus.svelte';
	import SmAvatar from './SmAvatar.svelte';
	import Contact from './Contact.svelte';
	import Title from './Title.svelte';
	import Availability from './Availability.svelte';

	import { contacts } from '$lib/previews/StackedLists.json';
</script>

<div class="@container">
	<div class="bg-white px-4 py-12 @sm:px-6 @lg:px-8">
		<div class="mx-auto max-w-4xl">
			<ul role="list" class="divide-y divide-gray-100">
				{#each contacts as contact}
					<li class="flex justify-between gap-x-6 py-5">
						<ProfileCard>
							<SmAvatar avatarUrl={contact.photo} slot="avatar" />
							<Contact name={contact.name} email={contact.email} slot="contact" />
						</ProfileCard>
						<ProfileStatus>
							<Title title={contact.title} slot="title" />
							<Availability
								timestamp={contact.lastSeen}
								available={contact.online}
								slot="availability"
							/>
						</ProfileStatus>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
