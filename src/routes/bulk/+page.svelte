<script>
	let stackSize;
	let currSize;
	let currType;
</script>

<div class="m-4 text-center font-bold">
	<h1 class="text-5xl mb-2">bulk selling pricing text generator</h1>
	<h5 class="text-m">this quickly puts together the text needed to bulk sell items in poe</h5>
</div>

<div class="flex justify-center">
	<div class="flex flex-col w-5/6 lg:flex-row mt-8">
		<div class="grid flex-grow h-fit card bg-base-300 rounded-box place-items-center">
			<p class="text-2xl m-4">
				stack of item im selling <input
					bind:value={stackSize}
					type="text"
					class="input-sm w-12 rounded-box font-bold"
				/>
			</p>
			<div class="text-2xl mb-4">
				for <input bind:value={currSize} type="text" class="input-sm w-12 rounded-box font-bold" />
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="pr-2">chaos</span>
						<input
							bind:group={currType}
							type="radio"
							name="radio-10"
							class="radio"
							value="chaos"
							checked
						/>
					</label>
				</div>
				<div class="form-control">
					<label class="label cursor-pointer">
						<span class="pr-2">divine</span>
						<input
							bind:group={currType}
							type="radio"
							name="radio-10"
							class="radio"
							value="divine"
						/>
					</label>
				</div>
			</div>
		</div>
		<div class="divider lg:divider-horizontal" />
		<div class="grid flex-grow h-fit card bg-base-300 rounded-box place-items-center">
			{#if stackSize !== undefined && currType !== undefined && currType !== undefined}
				<div class="m-4">
					<p class="text-xl">stack size: {stackSize}</p>
					<p class="text-xl">currency size: {currSize}</p>
					<p class="text-xl">currency type: {currType}</p>
				</div>
				<div class="select-all bg-primary-focus mb-4 rounded-box">
					<p class="text-2xl p-2">~price {currSize}/{stackSize} {currType}</p>
				</div>
			{:else}
				<p class="text-5xl m-4">fill out the form!!!!</p>
			{/if}
		</div>
	</div>
</div>
