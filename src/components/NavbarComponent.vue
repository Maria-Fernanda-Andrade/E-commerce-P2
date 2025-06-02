<template>
  <header>
    <div class="text-center bg-rose-900 text-white text-sm py-1 px-4 border-b border-gray-300">
      <h1>Encontre os melhores produtos, com preços que cabem no seu bolso</h1>
    </div>

    <nav class="flex items-center justify-between px-6 py-6 bg-orange-50 shadow-sm">
      <div class="flex space-x-4">
        <a href="#" class="font-bold text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110">Beleza</a>
        <a href="#" class="font-bold text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110">Fragrâncias</a>
        <a href="#" class="font-bold text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110">Mobília</a>
        <a href="#" class="font-bold text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110">Mantimentos</a>
      </div>

      <div class="cursor-default absolute left-1/2 transform -translate-x-1/2">
        <img class="w-20 h-auto" src="/public/logo3.png" alt="logo">
      </div>

      <div class="flex space-x-4 items-center">
        <button class="text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110"> <router-link to="/carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg></router-link>
        </button>

        <button class="text-neutral-800 transition duration-300 transform hover:text-rose-800 hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
            </svg>
        </button>
      </div>
    </nav>
  </header>
</template>