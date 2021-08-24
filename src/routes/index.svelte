<script context="module">
  export async function load({ session }) {
    return {
      props: {
        user: session.user,
      },
    };
  }
</script>

<script>
  export let user;
</script>

<h1>SvelteKit Auth</h1>
<p>
  Try to visit the <a href="/restricted">restricted</a> page.
</p>

{#if user}
  <h2>Welcome {user}</h2>
  <br />
  <a href="/logout">
    <button>Logout</button>
  </a>
{:else}
  <a href="/login">
    <button>Login using GitHub</button>
  </a>
{/if}

<style>
  .error {
    color: red;
  }
</style>
