<script lang="ts">
	import { changeNavBar, isNavBar } from './NavBar.store';
</script>

<div class="nav-bar-wrapper bg-surface-800">
	<nav class={$isNavBar ? 'open' : ''}>
		<button class="h2" on:click={changeNavBar}>
			L<span class="h4">iga</span>
			P<span class="h4">oszukiwaczy</span>
			S<span class="h4">karbów</span>
		</button>
	</nav>
</div>

<style lang="scss">
	.nav-bar-wrapper {
		height: 100vh;
		width: auto;
		position: absolute;
	}
	nav {
		height: 100%;
		padding: 20px;

		button {
			display: flex;
			width: min-content;
			margin: auto;
			justify-content: center;

			span {
				display: flex;
				align-items: flex-end;
				opacity: 0;
				width: 0;
				transition:
					opacity 2s,
					width 2s;
				// overflow: hidden;
			}
		}

		&.open {
			span {
				opacity: 1;
				width: 100%;
				overflow: visible;
			}
		}
	}
</style>
