<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">Currenty logged in as ... email</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email{
  color: #999;
  font-size: 14px;
}
</style>
