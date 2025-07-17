<template>
  <nav class="h-20 fixed bg-white flex rounded">
    <RouterLink to="/home" class="content-center text-2xl text-center w-60"
      >Damians Blog</RouterLink
    >
    <ul class="justify-end flex text-lg h-full w-screen">
      <RouterLink to="/home" class="content-center pl-5 cursor-pointer">Home</RouterLink>
      <RouterLink to="/blog" class="content-center pl-5 cursor-pointer">Blog</RouterLink>
      <li class="content-center pl-5">About</li>
      <li class="content-center pl-5 pr-5">Contact</li>
      <li class="content-center pl-5 pr-5">Admin</li>
      <li class="content-center pr-5">Login</li>
    </ul>
  </nav>
</template>

<script></script>
