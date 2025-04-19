module.exports = {  
    defaultDomain: "x-vavada.com",  
    mirrors: [  
      "1-vavada.ru",  
      "2-vavada.ru",  
      "3-vavada.ru",  
    ],  
    mountId: "vavada",
    defaultLink: "https://vavada.c-wn.ru",   
    pages: [  
      {  
        id: "index",  
        filename: "index",  
        title: "VAVADA (ВАВАДА) - Официальный сайт казино | Бонусы 2024",  
        description: "VAVADA Casino - официальный сайт казино. Бонусы до 100000₽, быстрая регистрация, более 5000 лицензионных слотов. Надежное онлайн казино с быстрыми выплатами.",  
        dataLink: "https://vavada.c-wn.ru",
        keywords: "VAVADA, ВАВАДА, вавада казино, vavada casino, официальный сайт вавада, vavada com",  
        canonical: "https://x-vavada.com",  
        ogImage: "https://krustovavada.com/images/og-image.jpg",  
        type: "main",  
        hreflangs: {  
          "x-default": "https://x-vavada.com",   
        }, 
      staticContent: `  
      <div class="flex flex-col min-h-screen">  
<header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Текущая страница</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white font-semibold">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>
<!-- Main Content Block -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  
    <!-- Hero Section с интегрированной статистикой -->  
  <!-- Hero Section -->  
<section class="relative rounded-xl overflow-hidden bg-[#232338] p-8 mb-12" itemscope itemtype="https://schema.org/Casino">  
    <meta itemprop="name" content="VAVADA Casino">  
    <meta itemprop="description" content="Лицензионные игры, моментальные выплаты и щедрые бонусы для новых игроков">  
    
    <!-- Добавляем корректный рейтинг -->  
    <div itemprop="aggregateRating" itemscope itemtype="https://schema.org/AggregateRating">  
        <meta itemprop="itemReviewed" content="VAVADA Casino">  
        <meta itemprop="reviewCount" content="5000">  
        <meta itemprop="ratingValue" content="4.9">  
        <meta itemprop="bestRating" content="5">  
        <meta itemprop="worstRating" content="1">  
    </div>  

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">  
        <div class="relative z-10">  
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight" itemprop="slogan">  
                VAVADA — официальный сайт казино  
            </h1>  
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">  
                Лицензионные игры, моментальные выплаты и щедрые бонусы для новых игроков  
            </p>  
            
            <!-- Статистика -->  
            <div class="grid grid-cols-2 gap-4 mb-8">  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-transform">  
                    <div class="text-2xl font-bold text-white">5000+</div>  
                    <div class="text-gray-400">Игр</div>  
                </div>  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-transform">  
                    <div class="text-2xl font-bold text-white">₽100K</div>  
                    <div class="text-gray-400">Бонус</div>  
                </div>  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-transform">  
                    <div class="text-2xl font-bold text-white">97.8%</div>  
                    <div class="text-gray-400">RTP</div>  
                </div>  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-transform">  
                    <div class="text-2xl font-bold text-white">24/7</div>  
                    <div class="text-gray-400">Поддержка</div>  
                </div>  
            </div>  

            <!-- CTA кнопки -->  
            <div class="flex flex-col sm:flex-row gap-4">  
                <a href="/registration.html"  
                   class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#ff424d] hover:bg-[#ff2c39] transform hover:scale-105 transition-all shadow-lg shadow-[#ff424d]/20"  
                   itemprop="significantLink">  
                    Регистрация  
                </a>  
                <a href="/mirror.html"  
                   class="inline-flex items-center justify-center px-6 py-3 border-2 border-[#ff424d] text-base font-medium rounded-md text-white hover:bg-[#ff424d]/10 transform hover:scale-105 transition-all">  
                    Войти  
                </a>  
            </div>  
        </div>  

        <!-- Декоративная часть -->  
        <div class="hidden md:block relative z-10 transform hover:scale-105 transition-transform duration-500">  
            <div class="aspect-video bg-gradient-to-br from-[#ff424d]/20 via-[#ff424d]/10 to-[#2a2a42] rounded-lg shadow-2xl">  
                <div class="absolute inset-0 bg-[url('/api/placeholder/800/450')] rounded-lg opacity-10 mix-blend-overlay"></div>  
            </div>  
        </div>  
    </div>  

    <!-- Фоновые элементы -->  
    <div class="absolute inset-0 bg-gradient-to-r from-[#ff424d]/10 via-[#ff424d]/5 to-transparent"></div>  
    <div class="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5 mix-blend-overlay"></div>  
</section>  
    <!-- Current Bonuses -->  
    <div class="bg-[#232338] rounded-xl p-8 mb-8">  
        <h2 class="text-3xl font-bold text-white mb-6">  
            Актуальные бонусы VAVADA  
        </h2>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="text-[#ff424d] text-xl font-bold mb-2">Приветственный пакет</div>  
                <div class="text-2xl font-bold text-white mb-4">100% до ₽100,000</div>  
                <p class="text-gray-400 mb-4">+ 100 фриспинов новым игрокам</p>  
                <a href="/registration.html" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors">  
                    Получить бонус  
                </a>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="text-[#ff424d] text-xl font-bold mb-2">Кэшбэк</div>  
                <div class="text-2xl font-bold text-white mb-4">До 10%</div>  
                <p class="text-gray-400 mb-4">Еженедельный возврат средств</p>  
                <a href="/bonuses.html#cashback" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors">  
                    Подробнее  
                </a>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="text-[#ff424d] text-xl font-bold mb-2">Релоад бонус</div>  
                <div class="text-2xl font-bold text-white mb-4">50% на депозит</div>  
                <p class="text-gray-400 mb-4">Каждую пятницу</p>  
                <a href="/bonuses.html#reload" class="inline-flex items-center justify-center w-full px-4 py-2 bg-[#ff424d] text-white rounded-md hover:bg-[#ff2c39] transition-colors">  
                    Подробнее  
                </a>  
            </div>  
        </div>  
    </div>  

    <!-- Main Features -->  
    <div class="bg-[#232338] rounded-xl p-8 mb-8">  
        <h2 class="text-3xl font-bold text-white mb-6">  
            Преимущества VAVADA Casino  
        </h2>  
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
            <div class="flex items-start space-x-4">  
                <div class="flex-shrink-0">  
                    <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-[#ff424d]">  
                        <!-- Icon -->  
                    </span>  
                </div>  
                <div>  
                    <h3 class="text-xl font-bold text-white mb-2">Лицензионные игры</h3>  
                    <p class="text-gray-400">Более 5000 слотов от ведущих провайдеров с официальной лицензией</p>  
                </div>  
            </div>  
            <div class="flex items-start space-x-4">  
                <div class="flex-shrink-0">  
                    <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-[#ff424d]">  
                        <!-- Icon -->  
                    </span>  
                </div>  
                <div>  
                    <h3 class="text-xl font-bold text-white mb-2">Быстрые выплаты</h3>  
                    <p class="text-gray-400">Моментальный вывод средств на карты и популярные платежные системы</p>  
                </div>  
            </div>  
            <div class="flex items-start space-x-4">  
                <div class="flex-shrink-0">  
                    <span class="inline-flex items-center justify-center h-12 w-12 rounded-md bg-[#ff424d]">  
                        <!-- Icon -->  
                    </span>  
                </div>  
                <div>  
                    <h3 class="text-xl font-bold text-white mb-2">Щедрые бонусы</h3>  
                    <p class="text-gray-400">Приветственные бонусы, фриспины и регулярные акции для игроков</p>  
                </div>  
            </div>  
        </div>  
    </div>  

<!-- Popular Games -->  
<div class="bg-[#232338] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
    <div class="flex justify-between items-center mb-4 sm:mb-6">  
        <h2 class="text-xl sm:text-3xl font-bold text-white">Популярные игры</h2>  
        <a href="/slots.html" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] transition-colors">  
            Все игры →  
        </a>  
    </div>  
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">  
        <!-- Sweet Bonanza -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Sweet Bonanza</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Pragmatic Play</p>  
            </div>  
        </div>  

        <!-- Gates of Olympus -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Gates of Olympus</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Pragmatic Play</p>  
            </div>  
        </div>  

        <!-- Big Bass Splash -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-green-500 to-teal-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Big Bass Splash</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Pragmatic Play</p>  
            </div>  
        </div>  

        <!-- Sugar Rush -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-red-500 to-orange-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Sugar Rush</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Pragmatic Play</p>  
            </div>  
        </div>  

        <!-- Fruit Party -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-500 to-red-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Fruit Party</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Pragmatic Play</p>  
            </div>  
        </div>  

        <!-- Book of Dead -->  
        <div class="group relative">  
            <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">  
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">  
                    <button class="opacity-0 group-hover:opacity-100 bg-[#ff424d] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-md text-sm">  
                        Играть  
                    </button>  
                </div>  
            </div>  
            <div class="mt-2">  
                <h3 class="text-white font-medium text-sm sm:text-base">Book of Dead</h3>  
                <p class="text-gray-400 text-xs sm:text-sm">Play'n GO</p>  
            </div>  
        </div>  
    </div>  
</div>

    <!-- Live Winners & Stats -->  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">  
        <div class="bg-[#232338] rounded-xl p-6 col-span-2">  
            <h2 class="text-2xl font-bold text-white mb-4">  
                Последние выигрыши  
            </h2>  
            <div class="space-y-4">  
                <!-- Live Winners List -->  
                <div class="flex items-center justify-between p-3 bg-[#2a2a42] rounded">  
                    <div class="flex items-center space-x-3">  
                        <div class="w-8 h-8 rounded-full bg-[#ff424d]"></div>  
                        <div>  
                            <div class="text-white">Alex***</div>  
                            <div class="text-sm text-gray-400">Sweet Bonanza</div>  
                        </div>  
                    </div>  
                    <div class="text-[#4CAF50] font-bold">₽156,420</div>  
                </div>  
                <!-- Repeat for other winners -->  
            </div>  
        </div>  
        <div class="bg-[#232338] rounded-xl p-6">  
            <h2 class="text-2xl font-bold text-white mb-4">  
                Статистика  
            </h2>  
            <div class="space-y-4">  
                <div class="flex justify-between items-center">  
                    <span class="text-gray-400">Игроков онлайн:</span>  
                    <span class="text-white font-bold">2,847</span>  
                </div>  
                <div class="flex justify-between items-center">  
                    <span class="text-gray-400">Выплачено за сегодня:</span>  
                    <span class="text-white font-bold">₽14,576,890</span>  
                </div>  
                <div class="flex justify-between items-center">  
                    <span class="text-gray-400">Джекпот:</span>  
                    <span class="text-[#ff424d] font-bold">₽2,345,678</span>  
                </div>  
            </div>  
        </div>  
    </div>  

    <!-- Why Choose Us -->  
    <div class="bg-[#232338] rounded-xl p-8 mb-8">  
        <h2 class="text-3xl font-bold text-white mb-6">  
            Почему выбирают VAVADA?  
        </h2>  
        <div class="prose prose-invert max-w-none">  
            <p class="mb-4">  
                Онлайн казино VAVADA — это лицензированная игровая платформа, предоставляющая игрокам доступ к тысячам азартных игр от ведущих разработчиков. Мы работаем по официальной лицензии Curacao eGaming, что гарантирует честность игрового процесса и безопасность ваших данных.  
            </p>  
            <p class="mb-4">  
                Наши преимущества:  
            </p>  
            <ul class="space-y-2">  
                <li>Более 5000 лицензионных слотов от топовых провайдеров</li>  
                <li>Щедрая бонусная программа с приветственным пакетом до 100,000₽</li>  
                <li>Моментальные выплаты на все популярные платежные системы</li>  
                <li>Круглосуточная поддержка на русском языке</li>  
                <li>Регулярные турниры с крупными призовыми фондами</li>  
            </ul>  
        </div>  
    </div>  

<!-- Security & Licenses -->  
<div class="bg-[#232338] rounded-xl p-4 sm:p-8">  
    <h2 class="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">  
        Безопасность и надежность  
    </h2>  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">  
        <div>  
            <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Лицензия и сертификаты</h3>  
            <p class="text-sm sm:text-base text-gray-400 mb-4">  
                VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006. Все игры проходят регулярную проверку на честность независимыми аудиторами.  
            </p>  
            <div class="flex flex-wrap gap-3">  
                <!-- License Badges -->  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>  
                    Curacao Licensed  
                </div>  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>  
                    RNG Certified  
                </div>  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>  
                    eCOGRA Approved  
                </div>  
            </div>  
        </div>  
        <div>  
            <h3 class="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Безопасные платежи</h3>  
            <p class="text-sm sm:text-base text-gray-400 mb-4">  
                Все транзакции защищены современным SSL-шифрованием, а персональные данные хранятся в соответствии с международными стандартами безопасности.  
            </p>  
            <div class="flex flex-wrap gap-3">  
                <!-- Security Badges -->  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-[#ff424d] rounded-full mr-2"></span>  
                    Visa Secure  
                </div>  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-[#ff424d] rounded-full mr-2"></span>  
                    Mastercard SecureCode  
                </div>  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-[#ff424d] rounded-full mr-2"></span>  
                    SSL Encryption  
                </div>  
                <div class="bg-[#1c1c2d] rounded-lg px-4 py-2 text-xs sm:text-sm text-gray-300 flex items-center">  
                    <span class="w-2 h-2 bg-[#ff424d] rounded-full mr-2"></span>  
                    PCI DSS Compliant  
                </div>  
            </div>  
        </div>  
    </div>  
</div>  

    <!-- Reviews Section -->  
    <div class="bg-[#232338] rounded-xl p-8 mt-8">  
        <div class="flex justify-between items-center mb-6">  
            <h2 class="text-3xl font-bold text-white">Отзывы игроков</h2>  
            <div class="flex items-center">  
                <div class="text-[#ff424d] text-2xl font-bold">4.9</div>  
                <div class="flex text-[#ff424d] ml-2">  
                    ★★★★★  
                </div>  
            </div>  
        </div>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="flex items-center mb-4">  
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold">  
                        М  
                    </div>  
                    <div class="ml-3">  
                        <div class="text-white font-medium">Максим</div>  
                        <div class="text-gray-400 text-sm">2 дня назад</div>  
                    </div>  
                </div>  
                <div class="text-[#ff424d] mb-2">★★★★★</div>  
                <p class="text-gray-300">  
                    Быстрые выплаты, отличная поддержка. Вывел крупный выигрыш без проблем за 15 минут.  
                </p>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="flex items-center mb-4">  
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold">  
                        А  
                    </div>  
                    <div class="ml-3">  
                        <div class="text-white font-medium">Анна</div>  
                        <div class="text-gray-400 text-sm">неделю назад</div>  
                    </div>  
                </div>  
                <div class="text-[#ff424d] mb-2">★★★★★</div>  
                <p class="text-gray-300">  
                    Отличные бонусы и большой выбор игр. Особенно нравится раздел с живыми дилерами.  
                </p>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <div class="flex items-center mb-4">  
                    <div class="w-10 h-10 rounded-full bg-[#ff424d] flex items-center justify-center text-white font-bold">  
                        В  
                    </div>  
                    <div class="ml-3">  
                        <div class="text-white font-medium">Владимир</div>  
                        <div class="text-gray-400 text-sm">месяц назад</div>  
                    </div>  
                </div>  
                <div class="text-[#ff424d] mb-2">★★★★★</div>  
                <p class="text-gray-300">  
                    Играю больше года, всё честно и прозрачно. Техподдержка всегда помогает решить любые вопросы.  
                </p>  
            </div>  
        </div>  
    </div>  

    <!-- FAQ Section -->  
    <div class="bg-[#232338] rounded-xl p-8 mt-8">  
        <h2 class="text-3xl font-bold text-white mb-6">  
            Часто задаваемые вопросы  
        </h2>  
        <div class="space-y-4">  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <h3 class="text-xl font-bold text-white mb-2">  
                    Как начать играть в VAVADA?  
                </h3>  
                <p class="text-gray-400">  
                    Для начала игры достаточно зарегистрироваться на сайте, пополнить счет любым удобным способом и выбрать интересующую игру из каталога.  
                </p>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <h3 class="text-xl font-bold text-white mb-2">  
                    Какие способы вывода средств доступны?  
                </h3>  
                <p class="text-gray-400">  
                    Мы поддерживаем все популярные способы вывода: банковские карты, электронные кошельки, криптовалюты. Минимальная сумма вывода - 1000₽.  
                </p>  
            </div>  
            <div class="bg-[#2a2a42] rounded-xl p-6">  
                <h3 class="text-xl font-bold text-white mb-2">  
                    Как получить приветственный бонус?  
                </h3>  
                <p class="text-gray-400">  
                    Приветственный бонус начисляется автоматически после первого депозита от 1000₽. Вы получите 100% к сумме пополнения и 100 фриспинов.  
                </p>  
            </div>  
        </div>  
        <div class="text-center mt-6">  
            <a href="/faq.html" class="text-[#ff424d] hover:text-[#ff2c39] transition-colors">  
                Смотреть все вопросы →  
            </a>  
        </div>  
    </div>  

    <!-- CTA Section -->  
    <div class="bg-gradient-to-r from-[#ff424d] to-[#ff2c39] rounded-xl p-8 mt-8 text-center">  
        <h2 class="text-3xl font-bold text-white mb-4">  
            Готовы начать игру?  
        </h2>  
        <p class="text-white text-xl mb-6">  
            Зарегистрируйтесь сейчас и получите приветственный бонус до 100,000₽  
        </p>  
        <div class="flex flex-col sm:flex-row justify-center gap-4">  
            <a href="/registration.html" class="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#ff424d] transition-colors">  
                Регистрация  
            </a>  
            <a href="/bonuses.html" class="inline-flex items-center justify-center px-8 py-3 bg-white text-base font-medium rounded-md text-[#ff424d] hover:bg-gray-100 transition-colors">  
                Все бонусы  
            </a>  
        </div>  
    </div>  
</main>
  
          <!-- Footer -->  
<footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>
      </div>  
  `,
    },
    //Зеркало
    {  
        id: "mirrors",  
        filename: "mirrors",  
        title: "Зеркало VAVADA (ВАВАДА) - Рабочее зеркало казино | Доступ 2025",  
        description: "Актуальное зеркало казино VAVADA ✓ Рабочие ссылки для доступа к официальному сайту ✓ Круглосуточный вход без блокировок",
        dataLink: "https://vavada-c-wn.ru",  
        keywords: "зеркало вавада, vavada зеркало, рабочее зеркало вавада, актуальное зеркало vavada, вход вавада",  
        canonical: "https://krustovavada.com/mirrors",  
        ogImage: "https://krustovavada.com/images/og-mirrors.jpg",  
        type: "mirrors",  
        hreflangs: {  
          "x-default": "https://krustovavada.com/mirrors",   
        },  
        staticContent: `  
 <div class="flex flex-col min-h-screen">  
    <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Актуальные рабочие зеркала</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white font-semibold">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>

<!-- Main Content Block для mirrors.html -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#232338] rounded-xl">  
    <article class="prose prose-invert max-w-none" itemscope itemtype="https://schema.org/Article">  
        <meta itemprop="headline" content="Рабочее зеркало VAVADA на сегодня 2025 - Актуальные ссылки">  
        <meta itemprop="description" content="Актуальные рабочие зеркала VAVADA Casino на сегодня ⚡ Быстрый доступ к официальному сайту казино ✓ Обновляемые ссылки 2025">  
        
        <h1 id="top" class="text-4xl md:text-5xl font-bold text-white mb-8 text-center" itemprop="name">  
            Рабочее зеркало VAVADA на сегодня 2025  
        </h1>  

        <!-- Быстрая навигация -->  
        <nav class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
            <h2 class="sr-only">Навигация по странице</h2>  
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">  
                <li>  
                    <a href="#mirrors" class="block p-4 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors">  
                        <span class="text-[#ff424d] text-lg font-medium">🔗 Актуальные зеркала</span>  
                        <p class="text-sm text-gray-400 mt-1">Рабочие ссылки на сегодня</p>  
                    </a>  
                </li>  
                <li>  
                    <a href="#how-to-use" class="block p-4 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors">  
                        <span class="text-[#ff424d] text-lg font-medium">📱 Как использовать</span>  
                        <p class="text-sm text-gray-400 mt-1">Инструкция по входу</p>  
                    </a>  
                </li>  
                <li>  
                    <a href="#benefits" class="block p-4 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors">  
                        <span class="text-[#ff424d] text-lg font-medium">⭐ Преимущества</span>  
                        <p class="text-sm text-gray-400 mt-1">Почему стоит использовать</p>  
                    </a>  
                </li>  
                <li>  
                    <a href="#faq" class="block p-4 bg-[#1c1c2d] rounded-lg hover:bg-[#282842] transition-colors">  
                        <span class="text-[#ff424d] text-lg font-medium">❓ FAQ</span>  
                        <p class="text-sm text-gray-400 mt-1">Ответы на вопросы</p>  
                    </a>  
                </li>  
            </ul>  
        </nav>  

        <!-- Актуальные зеркала -->  
        <section id="mirrors" class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
            <h2 class="text-2xl font-bold text-white mb-6">Актуальные зеркала VAVADA</h2>  
            
            <div class="mb-6 p-4 bg-[#1c1c2d] rounded-lg border border-[#ff424d]">  
                <p class="text-yellow-400 font-medium mb-3">⚡ Рабочее зеркало на сегодня:</p>  
                <div class="flex items-center justify-between p-3 bg-[#232338] rounded">  
                    <span class="font-medium">vavada-casino.com</span>  
                    <span class="text-[#4CAF50] flex items-center">  
                        <span class="w-2 h-2 bg-[#4CAF50] rounded-full mr-2"></span>  
                        Работает  
                    </span>  
                </div>  
            </div>  
            
            <p class="text-sm text-gray-300 mb-4">Альтернативные зеркала для доступа:</p>  
            <div class="space-y-3">  
                <div class="flex items-center justify-between p-3 bg-[#1c1c2d] rounded">  
                    <span>vavada-casino.xyz</span>  
                    <span class="text-[#4CAF50]">Работает</span>  
                </div>  
                <div class="flex items-center justify-between p-3 bg-[#1c1c2d] rounded">  
                    <span>vavada-casino.site</span>  
                    <span class="text-[#4CAF50]">Работает</span>  
                </div>  
            </div>  
        </section>  

        <!-- Как использовать -->  
        <section id="how-to-use" class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
            <h2 class="text-2xl font-bold text-white mb-6">Как использовать зеркало VAVADA?</h2>  
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">  
                <div class="bg-[#1c1c2d] p-4 rounded-lg">  
                    <h3 class="text-lg font-medium text-white mb-3">Быстрый вход</h3>  
                    <ol class="space-y-3 list-decimal pl-4 text-gray-300">  
                        <li>Выберите актуальное зеркало из списка</li>  
                        <li>Перейдите по рабочей ссылке</li>  
                        <li>Войдите в аккаунт</li>  
                        <li>Начните игру</li>  
                    </ol>  
                </div>  
                <div class="bg-[#1c1c2d] p-4 rounded-lg">  
                    <h3 class="text-lg font-medium text-white mb-3">Важные моменты</h3>  
                    <ul class="space-y-3 text-gray-300">  
                        <li class="flex items-start">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Используйте только официальные зеркала  
                        </li>  
                        <li class="flex items-start">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Проверяйте SSL-сертификат  
                        </li>  
                        <li class="flex items-start">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Сохраняйте рабочие ссылки  
                        </li>  
                    </ul>  
                </div>  
            </div>  
        </section>  

        <!-- Преимущества -->  
        <section id="benefits" class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
            <h2 class="text-2xl font-bold text-white mb-6">Преимущества зеркал VAVADA</h2>  
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
                <div class="bg-[#1c1c2d] p-6 rounded-lg">  
                    <h3 class="text-lg font-medium text-white mb-3">Доступность 24/7</h3>  
                    <p class="text-gray-300">Бесперебойный доступ к казино в любое время</p>  
                </div>  
                <div class="bg-[#1c1c2d] p-6 rounded-lg">  
                    <h3 class="text-lg font-medium text-white mb-3">Безопасность</h3>  
                    <p class="text-gray-300">Защищенное SSL-соединение и сохранность данных</p>  
                </div>  
                <div class="bg-[#1c1c2d] p-6 rounded-lg">  
                    <h3 class="text-lg font-medium text-white mb-3">Функциональность</h3>  
                    <p class="text-gray-300">Полный доступ ко всем играм и функциям казино</p>  
                </div>  
            </div>  
        </section>  

        <!-- FAQ -->  
        <section id="faq" class="bg-[#2a2a42] rounded-xl p-6" itemscope itemtype="https://schema.org/FAQPage">  
            <h2 class="text-2xl font-bold text-white mb-6">Частые вопросы</h2>  
            
            <div class="space-y-6">  
                <div class="bg-[#1c1c2d] p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">  
                    <h3 itemprop="name" class="text-lg font-medium text-white mb-3">Безопасно ли использовать зеркала?</h3>  
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">  
                        <div itemprop="text" class="text-gray-300">  
                            Официальные зеркала VAVADA полностью безопасны. Они используют то же SSL-шифрование и защиту данных, что и основной сайт.  
                        </div>  
                    </div>  
                </div>  

                <div class="bg-[#1c1c2d] p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">  
                    <h3 itemprop="name" class="text-lg font-medium text-white mb-3">Как получать новые зеркала?</h3>  
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">  
                        <div itemprop="text" class="text-gray-300">  
                            <ul class="space-y-2">  
                                <li>• Подписаться на Telegram-канал</li>  
                                <li>• Сохранить эту страницу в закладки</li>  
                                <li>• Обратиться в службу поддержки</li>  
                            </ul>  
                        </div>  
                    </div>  
                </div>  

                <div class="bg-[#1c1c2d] p-4 rounded-lg" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">  
                    <h3 itemprop="name" class="text-lg font-medium text-white mb-3">Сохраняются ли данные аккаунта?</h3>  
                    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">  
                        <div itemprop="text" class="text-gray-300">  
                            Да, все данные аккаунта, включая баланс, бонусы и историю игр, полностью сохраняются при входе через зеркало.  
                        </div>  
                    </div>  
                </div>  
            </div>  
        </section>  

        <!-- Кнопка наверх -->  
        <div class="fixed bottom-8 right-8">  
            <a href="#top" class="bg-[#ff424d] text-white p-3 rounded-full hover:bg-[#ff2c39] transition-colors shadow-lg">  
                ↑  
            </a>  
        </div>  
    </article>  
</main>

<footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
      </div>  
          `,
    },

       // Бонусы  
       {  
        id: "bonuses",  
        filename: "bonuses",  
        title: "Бонусы VAVADA 2025 - Приветственный бонус 100 000₽ | Программа лояльности",  
        description: "Актуальные бонусы казино VAVADA ✓ Приветственный пакет до 100 000₽ ✓ Кэшбэк до 10% ✓ Фриспины за регистрацию ✓ Программа лояльности",  
        dataLink: "https://vavada.c-wn.ru",
        keywords: "бонусы вавада, vavada бонус, приветственный бонус вавада, фриспины vavada, кэшбэк вавада",  
        canonical: "https://krustovavada.com/bonuses",  
        ogImage: "https://krustovavada.com/images/og-bonuses.jpg",  
        type: "bonuses",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/bonuses",  
        },
        staticContent: ` 
        <div class="flex flex-col min-h-screen">  
    <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Бонусы + Бонус за регистрацию</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white font-semibold">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>
<!-- Main Content Block для bonuses.html -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-8 mb-12">  
        <div class="relative z-10">  
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">  
                Бонусы и акции VAVADA Casino  
            </h1>  
            <p class="text-xl text-gray-300 mb-8">  
                Получите приветственный бонус до 100 000₽ и 100 фриспинов — начните игру с максимальной выгодой  
            </p>  
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-6 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">100 000₽</div>  
                    <div class="text-white">На первый депозит</div>  
                </div>  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-6 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">10%</div>  
                    <div class="text-white">Кэшбэк каждую неделю</div>  
                </div>  
                <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-6 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">100 FS</div>  
                    <div class="text-white">Фриспины за регистрацию</div>  
                </div>  
            </div>  
        </div>  
        <div class="absolute inset-0 bg-gradient-to-r from-[#ff424d]/10 to-transparent"></div>  
    </section>  

    <!-- Навигация по странице -->  
    <nav class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
        <ul class="flex flex-wrap gap-4">  
            <li>  
                <a href="#welcome-bonus" class="text-[#ff424d] hover:text-[#ff2c39]">Приветственный бонус</a>  
            </li>  
            <li>  
                <a href="#loyalty" class="text-[#ff424d] hover:text-[#ff2c39]">Программа лояльности</a>  
            </li>  
            <li>  
                <a href="#cashback" class="text-[#ff424d] hover:text-[#ff2c39]">Кэшбэк</a>  
            </li>  
            <li>  
                <a href="#terms" class="text-[#ff424d] hover:text-[#ff2c39]">Правила и условия</a>  
            </li>  
        </ul>  
    </nav>  

    <!-- Приветственный бонус -->  
    <section id="welcome-bonus" class="bg-[#2a2a42] rounded-xl p-8 mb-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Приветственный пакет</h2>  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div>  
                <div class="bg-[#1c1c2d] rounded-xl p-6 mb-6">  
                    <h3 class="text-xl font-semibold text-white mb-4">Первый депозит</h3>  
                    <ul class="space-y-3 text-gray-300">  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            100% бонус до 100 000₽  
                        </li>  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            100 фриспинов в Book of Dead  
                        </li>  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Минимальный депозит 1000₽  
                        </li>  
                    </ul>  
                </div>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Как получить</h3>  
                <ol class="space-y-3 list-decimal pl-4 text-gray-300">  
                    <li>Зарегистрируйтесь на сайте</li>  
                    <li>Пополните счет от 1000₽</li>  
                    <li>Бонус начислится автоматически</li>  
                    <li>Отыграйте бонус с вейджером x35</li>  
                </ol>  
            </div>  
        </div>  
    </section>  

    <!-- Программа лояльности -->  
    <section id="loyalty" class="bg-[#2a2a42] rounded-xl p-8 mb-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Программа лояльности</h2>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Silver</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li>Кэшбэк 5%</li>  
                    <li>Персональные акции</li>  
                    <li>Бонусы на депозит</li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6 border-2 border-[#ff424d]">  
                <h3 class="text-xl font-semibold text-white mb-4">Gold</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li>Кэшбэк 7%</li>  
                    <li>Повышенные лимиты</li>  
                    <li>Эксклюзивные бонусы</li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Diamond</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li>Кэшбэк 10%</li>  
                    <li>VIP поддержка</li>  
                    <li>Особые привилегии</li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- Кэшбэк -->  
    <section id="cashback" class="bg-[#2a2a42] rounded-xl p-8 mb-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Еженедельный кэшбэк</h2>  
        <div class="bg-[#1c1c2d] rounded-xl p-6">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-xl font-semibold text-white mb-4">Условия получения</h3>  
                    <ul class="space-y-3 text-gray-300">  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            До 10% от проигранных ставок  
                        </li>  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Начисление каждый понедельник  
                        </li>  
                        <li class="flex items-center">  
                            <span class="text-[#ff424d] mr-2">✓</span>  
                            Вейджер x5  
                        </li>  
                    </ul>  
                </div>  
                <div>  
                    <h3 class="text-xl font-semibold text-white mb-4">Как активировать</h3>  
                    <ol class="space-y-3 list-decimal pl-4 text-gray-300">  
                        <li>Войдите в личный кабинет</li>  
                        <li>Перейдите в раздел "Бонусы"</li>  
                        <li>Нажмите "Активировать кэшбэк"</li>  
                    </ol>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Правила и условия -->  
    <section id="terms" class="bg-[#2a2a42] rounded-xl p-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Правила и условия</h2>  
        <div class="bg-[#1c1c2d] rounded-xl p-6">  
            <ul class="space-y-4 text-gray-300">  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] mr-2">•</span>  
                    Все бонусы доступны только для совершеннолетних игроков после верификации аккаунта  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] mr-2">•</span>  
                    Максимальная ставка при отыгрыше бонуса — 500₽  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] mr-2">•</span>  
                    Срок действия бонуса — 7 дней с момента активации  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] mr-2">•</span>  
                    Администрация оставляет за собой право изменять условия бонусной программы  
                </li>  
            </ul>  
        </div>  
    </section>  
</main>
<footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,
   },   

     // Слоты  
     {  
        id: "slots",  
        filename: "slots",  
        title: "Игровые автоматы VAVADA - 5000+ слотов от топовых провайдеров",  
        description: "Лицензионные игровые автоматы VAVADA ✓ Более 5000 слотов от ведущих провайдеров ✓ Высокий RTP ✓ Демо-режим без регистрации", 
        dataLink: "https://vavada.c-wn.ru", 
        keywords: "слоты вавада, игровые автоматы vavada, автоматы вавада онлайн, демо слоты vavada",  
        canonical: "https://krustovavada.com/slots",  
        ogImage: "https://krustovavada.com/images/og-slots.jpg",  
        type: "slots",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/slots",  
        },
        staticContent: ` 
         <div class="flex flex-col min-h-screen">  
    <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Игровые автоматы</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white font-semibold">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>
  
        <!-- Main Content Block для slots.html -->  
<main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-4 sm:p-8 mb-6 sm:mb-12">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">  
            <div class="relative z-10">  
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">  
                    Игровые автоматы  
                </h1>  
                <p class="text-lg sm:text-xl text-gray-300 mb-6">  
                    Более 7000 лицензионных слотов от ведущих провайдеров. Играйте бесплатно или на реальные деньги  
                </p>  
                <div class="flex flex-wrap gap-4">  
                    <button class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#ff424d] text-white font-semibold hover:bg-[#ff2c39] transition-colors">  
                        Играть сейчас  
                    </button>  
                    <button class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2a2a42] text-white font-semibold hover:bg-[#313151] transition-colors">  
                        Демо режим  
                    </button>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Поиск и фильтры -->  
    <section class="bg-[#2a2a42] rounded-xl p-4 sm:p-6 mb-6">  
        <div class="flex flex-col sm:flex-row gap-4">  
            <div class="flex-1">  
                <div class="relative">  
                    <input type="text"   
                           placeholder="Поиск игр..."   
                           class="w-full bg-[#1c1c2d] text-white rounded-xl px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#ff424d]">  
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">  
                        🔍  
                    </span>  
                </div>  
            </div>  
            <div class="flex gap-4 overflow-x-auto pb-2 sm:pb-0">  
                <select class="bg-[#1c1c2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff424d]">  
                    <option value="">Все провайдеры</option>  
                    <option value="pragmatic">Pragmatic Play</option>  
                    <option value="netent">NetEnt</option>  
                    <option value="playtech">Playtech</option>  
                </select>  
                <select class="bg-[#1c1c2d] text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff424d]">  
                    <option value="">По популярности</option>  
                    <option value="new">Новые</option>  
                    <option value="hot">Hot</option>  
                    <option value="jackpot">С джекпотом</option>  
                </select>  
            </div>  
        </div>  
    </section>  

    <!-- Категории слотов -->  
    <section class="mb-6">  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
            <a href="#all" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">🎰</span>  
                <span class="text-white font-medium">Все игры</span>  
            </a>  
            <a href="#new" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">🆕</span>  
                <span class="text-white font-medium">Новинки</span>  
            </a>  
            <a href="#popular" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">🔥</span>  
                <span class="text-white font-medium">Популярные</span>  
            </a>  
            <a href="#jackpot" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">💰</span>  
                <span class="text-white font-medium">Джекпоты</span>  
            </a>  
            <a href="#bonus" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">🎁</span>  
                <span class="text-white font-medium">Бонусные</span>  
            </a>  
            <a href="#favorites" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <span class="text-2xl mb-2 block">⭐</span>  
                <span class="text-white font-medium">Избранное</span>  
            </a>  
        </div>  
    </section>  

    <!-- Популярные слоты -->  
    <section class="mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Популярные слоты</h2>  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">  
            <!-- Слот 1 -->  
            <div class="bg-[#2a2a42] rounded-xl overflow-hidden group">  
                <div class="relative aspect-[3/4]">  
                    <img src="/api/placeholder/300/400" alt="Sweet Bonanza" class="w-full h-full object-cover">  
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">  
                        <button class="bg-[#ff424d] text-white px-4 py-2 rounded-lg hover:bg-[#ff2c39] transition-colors">  
                            Играть  
                        </button>  
                        <button class="bg-[#1c1c2d] text-white px-4 py-2 rounded-lg hover:bg-[#232338] transition-colors">  
                            Демо  
                        </button>  
                    </div>  
                </div>  
                <div class="p-4">  
                    <h3 class="text-white font-medium mb-1">Sweet Bonanza</h3>  
                    <p class="text-sm text-gray-400">Pragmatic Play</p>  
                </div>  
            </div>  

            <!-- Слот 2 -->  
            <div class="bg-[#2a2a42] rounded-xl overflow-hidden group">  
                <div class="relative aspect-[3/4]">  
                    <img src="/api/placeholder/300/400" alt="Book of Dead" class="w-full h-full object-cover">  
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">  
                        <button class="bg-[#ff424d] text-white px-4 py-2 rounded-lg hover:bg-[#ff2c39] transition-colors">  
                            Играть  
                        </button>  
                        <button class="bg-[#1c1c2d] text-white px-4 py-2 rounded-lg hover:bg-[#232338] transition-colors">  
                            Демо  
                        </button>  
                    </div>  
                </div>  
                <div class="p-4">  
                    <h3 class="text-white font-medium mb-1">Book of Dead</h3>  
                    <p class="text-sm text-gray-400">Play'n GO</p>  
                </div>  
            </div>  

            <!-- Слот 3 -->  
            <div class="bg-[#2a2a42] rounded-xl overflow-hidden group">  
                <div class="relative aspect-[3/4]">  
                    <img src="/api/placeholder/300/400" alt="Starburst" class="w-full h-full object-cover">  
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">  
                        <button class="bg-[#ff424d] text-white px-4 py-2 rounded-lg hover:bg-[#ff2c39] transition-colors">  
                            Играть  
                        </button>  
                        <button class="bg-[#1c1c2d] text-white px-4 py-2 rounded-lg hover:bg-[#232338] transition-colors">  
                            Демо  
                        </button>  
                    </div>  
                </div>  
                <div class="p-4">  
                    <h3 class="text-white font-medium mb-1">Starburst</h3>  
                    <p class="text-sm text-gray-400">NetEnt</p>  
                </div>  
            </div>  

            <!-- Слот 4 -->  
            <div class="bg-[#2a2a42] rounded-xl overflow-hidden group">  
                <div class="relative aspect-[3/4]">  
                    <img src="/api/placeholder/300/400" alt="Gonzo's Quest" class="w-full h-full object-cover">  
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">  
                        <button class="bg-[#ff424d] text-white px-4 py-2 rounded-lg hover:bg-[#ff2c39] transition-colors">  
                            Играть  
                        </button>  
                        <button class="bg-[#1c1c2d] text-white px-4 py-2 rounded-lg hover:bg-[#232338] transition-colors">  
                            Демо  
                        </button>  
                    </div>  
                </div>  
                <div class="p-4">  
                    <h3 class="text-white font-medium mb-1">Gonzo's Quest</h3>  
                    <p class="text-sm text-gray-400">NetEnt</p>  
                </div>  
            </div>  

            <!-- Слот 5 -->  
            <div class="bg-[#2a2a42] rounded-xl overflow-hidden group">  
                <div class="relative aspect-[3/4]">  
                    <img src="/api/placeholder/300/400" alt="Wolf Gold" class="w-full h-full object-cover">  
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">  
                        <button class="bg-[#ff424d] text-white px-4 py-2 rounded-lg hover:bg-[#ff2c39] transition-colors">  
                            Играть  
                        </button>  
                        <button class="bg-[#1c1c2d] text-white px-4 py-2 rounded-lg hover:bg-[#232338] transition-colors">  
                            Демо  
                        </button>  
                    </div>  
                </div>  
                <div class="p-4">  
                    <h3 class="text-white font-medium mb-1">Wolf Gold</h3>  
                    <p class="text-sm text-gray-400">Pragmatic Play</p>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Новые слоты -->  
    <section class="mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Новые слоты</h2>  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">  
            <!-- Аналогичные карточки слотов... -->  
        </div>  
    </section>  

    <!-- Провайдеры -->  
    <section class="mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Провайдеры</h2>  
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">  
            <a href="#pragmatic" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <div class="aspect-video bg-[#1c1c2d] rounded-lg mb-3"></div>  
                <span class="text-white font-medium">Pragmatic Play</span>  
            </a>  
            <a href="#netent" class="bg-[#2a2a42] rounded-xl p-4 text-center hover:bg-[#313151] transition-colors">  
                <div class="aspect-video bg-[#1c1c2d] rounded-lg mb-3"></div>  
                <span class="text-white font-medium">NetEnt</span>  
            </a>  
            <!-- Остальные провайдеры... -->  
        </div>  
    </section>  

    <!-- FAQ -->  
    <section class="bg-[#2a2a42] rounded-xl p-4 sm:p-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Частые вопросы о слотах</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как начать играть в слоты?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                                   Зарегистрируйтесь, пополните счет и выберите любой слот из каталога. Также доступен демо-режим без регистрации для ознакомления с игрой.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как работает демо-режим?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    В демо-режиме вы играете на виртуальные кредиты без риска реальных денег. Это позволяет изучить правила и механику игры перед реальными ставками.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Что такое RTP в слотах?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    RTP (Return To Player) - теоретический процент возврата средств игрокам. Например, RTP 96% означает, что в среднем 96% всех ставок возвращается игрокам в виде выигрышей.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как работают джекпоты?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Существуют фиксированные и прогрессивные джекпоты. Прогрессивные растут с каждой ставкой игроков, пока кто-то не выиграет главный приз. Фиксированные имеют заранее определенную сумму выигрыша.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Информационный блок -->  
    <section class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">  
        <!-- Преимущества -->  
        <div class="bg-[#2a2a42] rounded-xl p-4 sm:p-6">  
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Преимущества наших слотов</h2>  
            <ul class="space-y-4">  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] text-xl mr-3">✓</span>  
                    <div>  
                        <h3 class="text-white font-medium mb-1">Лицензионные игры</h3>  
                        <p class="text-sm text-gray-300">Только официальный софт от проверенных провайдеров</p>  
                    </div>  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] text-xl mr-3">✓</span>  
                    <div>  
                        <h3 class="text-white font-medium mb-1">Быстрые выплаты</h3>  
                        <p class="text-sm text-gray-300">Моментальный вывод выигрышей любым удобным способом</p>  
                    </div>  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] text-xl mr-3">✓</span>  
                    <div>  
                        <h3 class="text-white font-medium mb-1">Бонусы и акции</h3>  
                        <p class="text-sm text-gray-300">Регулярные бонусы, фриспины и турниры</p>  
                    </div>  
                </li>  
                <li class="flex items-start">  
                    <span class="text-[#ff424d] text-xl mr-3">✓</span>  
                    <div>  
                        <h3 class="text-white font-medium mb-1">Круглосуточная поддержка</h3>  
                        <p class="text-sm text-gray-300">Помощь в любое время дня и ночи</p>  
                    </div>  
                </li>  
            </ul>  
        </div>  

        <!-- Статистика -->  
        <div class="bg-[#2a2a42] rounded-xl p-4 sm:p-6">  
            <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Статистика слотов</h2>  
            <div class="grid grid-cols-2 gap-4">  
                <div class="bg-[#1c1c2d] rounded-xl p-4 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">7000+</div>  
                    <div class="text-white">Игровых автоматов</div>  
                </div>  
                <div class="bg-[#1c1c2d] rounded-xl p-4 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">98.6%</div>  
                    <div class="text-white">Максимальный RTP</div>  
                </div>  
                <div class="bg-[#1c1c2d] rounded-xl p-4 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">60+</div>  
                    <div class="text-white">Провайдеров</div>  
                </div>  
                <div class="bg-[#1c1c2d] rounded-xl p-4 text-center">  
                    <div class="text-3xl font-bold text-[#ff424d] mb-2">₽100M</div>  
                    <div class="text-white">Максимальный джекпот</div>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Мобильная версия -->  
    <section class="mt-8 bg-[#2a2a42] rounded-xl p-4 sm:p-8">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">  
            <div>  
                <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">Играйте с телефона</h2>  
                <p class="text-gray-300 mb-6">  
                    Все слоты адаптированы для мобильных устройств. Играйте в любимые игры где угодно через браузер или установите наше приложение.  
                </p>  
                <div class="flex flex-wrap gap-4">  
                    <button class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#ff424d] text-white font-semibold hover:bg-[#ff2c39] transition-colors">  
                        Скачать для Android  
                    </button>  
                    <button class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#2a2a42] text-white font-semibold hover:bg-[#313151] transition-colors border border-white/10">  
                        Открыть в браузере  
                    </button>  
                </div>  
            </div>  
            <div class="aspect-[9/16] bg-[#1c1c2d] rounded-xl"></div>  
        </div>  
    </section>  
</main>

        <footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,  
    },  

    // Платежи  
    {  
        id: "payments",  
        filename: "payments",  
        title: "Платежные методы VAVADA - Депозиты и вывод средств | Быстрые выплаты",  
        description: "Методы оплаты в казино VAVADA ✓ Мгновенные депозиты ✓ Быстрые выплаты ✓ Криптовалюта ✓ Банковские карты ✓ Электронные кошельки", 
        dataLink: "https://vavada.c-wn.ru",
        keywords: "вавада депозит, вывод vavada, платежные методы вавада, пополнение vavada",  
        canonical: "https://krustovavada.com/payments",  
        ogImage: "https://krustovavada.com/images/og-payments.jpg",  
        type: "payments",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/payments",  
        },
        staticContent: `
         <div class="flex flex-col min-h-screen">  
     <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Платежные методы</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white font-semibold">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>

<!-- Main Content Block для payments.html -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-4 sm:p-8 mb-6 sm:mb-12">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">  
            <div class="relative z-10">  
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">  
                    Платежные методы VAVADA  
                </h1>  
                <p class="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">  
                    Быстрые депозиты и моментальные выплаты. Безопасные транзакции и широкий выбор платежных систем  
                </p>  
                <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">  
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">1-15 мин</div>  
                        <div class="text-sm sm:text-base text-gray-400">Выплаты</div>  
                    </div>  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">  
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">0%</div>  
                        <div class="text-sm sm:text-base text-gray-400">Комиссия</div>  
                    </div>  
                </div>  
            </div>  
            <div class="hidden md:block relative z-10">  
                <div class="aspect-square bg-gradient-to-br from-[#ff424d]/20 to-[#2a2a42] rounded-lg shadow-xl"></div>  
            </div>  
        </div>  
        <div class="absolute inset-0 bg-gradient-to-r from-[#ff424d]/10 to-transparent"></div>  
    </section>  

    <!-- Навигация -->  
    <nav class="bg-[#2a2a42] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">  
        <ul class="flex flex-nowrap sm:flex-wrap gap-4 min-w-max sm:min-w-0">  
            <li><a href="#deposit" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Методы депозита</a></li>  
            <li><a href="#withdrawal" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Методы вывода</a></li>  
            <li><a href="#limits" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Лимиты</a></li>  
            <li><a href="#howto" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Инструкции</a></li>  
            <li><a href="#faq" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">FAQ</a></li>  
        </ul>  
    </nav>  

    <!-- Методы депозита -->  
    <section id="deposit" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Методы пополнения счета</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">  
            <!-- Банковские карты -->  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Банковские карты</h3>  
                <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        VISA/Mastercard  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        МИР  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Instant Processing  
                    </li>  
                </ul>  
            </div>  
            <!-- Криптовалюты -->  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Криптовалюты</h3>  
                <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Bitcoin (BTC)  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Ethereum (ETH)  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        USDT (TRC20)  
                    </li>  
                </ul>  
            </div>  
            <!-- Электронные кошельки -->  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Электронные кошельки</h3>  
                <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        ЮMoney  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        QIWI  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Perfect Money  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- Методы вывода -->  
    <section id="withdrawal" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Методы вывода средств</h2>  
        
        <!-- Мобильная версия -->  
        <div class="block sm:hidden space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4">  
                <h3 class="font-semibold text-white mb-2">Банковские карты</h3>  
                <dl class="space-y-2 text-sm">  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Время:</dt>  
                        <dd class="text-gray-300">1-24 часа</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Минимум:</dt>  
                        <dd class="text-gray-300">1000₽</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Комиссия:</dt>  
                        <dd class="text-gray-300">0%</dd>  
                    </div>  
                </dl>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-4">  
                <h3 class="font-semibold text-white mb-2">Криптовалюты</h3>  
                <dl class="space-y-2 text-sm">  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Время:</dt>  
                        <dd class="text-gray-300">5-15 минут</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Минимум:</dt>  
                        <dd class="text-gray-300">2000₽</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Комиссия:</dt>  
                        <dd class="text-gray-300">0%</dd>  
                    </div>  
                </dl>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-4">  
                <h3 class="font-semibold text-white mb-2">Электронные кошельки</h3>  
                <dl class="space-y-2 text-sm">  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Время:</dt>  
                        <dd class="text-gray-300">15-60 минут</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Минимум:</dt>  
                        <dd class="text-gray-300">500₽</dd>  
                    </div>  
                    <div class="flex justify-between">  
                        <dt class="text-gray-400">Комиссия:</dt>  
                        <dd class="text-gray-300">0%</dd>  
                    </div>  
                </dl>  
            </div>  
        </div>  

        <!-- Десктопная версия -->  
        <div class="hidden sm:block overflow-x-auto">  
            <table class="w-full text-left">  
                <thead class="bg-[#1c1c2d] text-white">  
                    <tr>  
                        <th class="p-4 rounded-l-xl">Метод</th>  
                        <th class="p-4">Время обработки</th>  
                        <th class="p-4">Минимальная сумма</th>  
                        <th class="p-4 rounded-r-xl">Комиссия</th>  
                    </tr>  
                </thead>  
                <tbody class="text-gray-300">  
                    <tr class="border-b border-[#2a2a42]">  
                        <td class="p-4">Банковские карты</td>  
                        <td class="p-4">1-24 часа</td>  
                        <td class="p-4">1000₽</td>  
                        <td class="p-4">0%</td>  
                    </tr>  
                    <tr class="border-b border-[#2a2a42]">  
                        <td class="p-4">Криптовалюты</td>  
                        <td class="p-4">5-15 минут</td>  
                        <td class="p-4">2000₽</td>  
                        <td class="p-4">0%</td>  
                    </tr>  
                    <tr>  
                        <td class="p-4">Электронные кошельки</td>  
                        <td class="p-4">15-60 минут</td>  
                        <td class="p-4">500₽</td>  
                        <td class="p-4">0%</td>  
                    </tr>  
                </tbody>  
            </table>  
        </div>  
    </section>  

<!-- Лимиты -->  
<section id="limits" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-4 sm:mb-8">  
    <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Лимиты и ограничения</h2>  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Депозиты</h3>  
            <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">  
                <li class="flex justify-between">  
                    <span>Минимальный:</span>  
                    <span class="text-[#ff424d]">100₽</span>  
                </li>  
                <li class="flex justify-between">  
                    <span>Максимальный:</span>  
                    <span class="text-[#ff424d]">500 000₽</span>  
                </li>  
                <li class="flex justify-between">  
                    <span>Дневной лимит:</span>  
                    <span class="text-[#ff424d]">1 000 000₽</span>  
                </li>  
            </ul>  
        </div>  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Выводы</h3>  
            <ul class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">  
                <li class="flex justify-between">  
                    <span>Минимальный:</span>  
                    <span class="text-[#ff424d]">500₽</span>  
                </li>  
                <li class="flex justify-between">  
                    <span>Максимальный:</span>  
                    <span class="text-[#ff424d]">300 000₽</span>  
                </li>  
                <li class="flex justify-between">  
                    <span>Дневной лимит:</span>  
                    <span class="text-[#ff424d]">500 000₽</span>  
                </li>  
            </ul>  
        </div>  
    </div>  
</section>  

<!-- Инструкции -->  
<section id="howto" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-4 sm:mb-8">  
    <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Как сделать депозит/вывод</h2>  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Депозит</h3>  
            <ol class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300 list-decimal pl-4">  
                <li>Войдите в личный кабинет</li>  
                <li>Нажмите кнопку "Депозит"</li>  
                <li>Выберите метод оплаты</li>  
                <li>Укажите сумму</li>  
                <li>Подтвердите операцию</li>  
            </ol>  
        </div>  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Вывод</h3>  
            <ol class="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300 list-decimal pl-4">  
                <li>Войдите в личный кабинет</li>  
                <li>Нажмите кнопку "Вывод"</li>  
                <li>Выберите метод вывода</li>  
                <li>Укажите сумму и реквизиты</li>  
                <li>Подтвердите операцию</li>  
            </ol>  
        </div>  
    </div>  
</section>  

<!-- FAQ -->  
<section id="faq" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8">  
    <h2 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Частые вопросы</h2>  
    <div class="space-y-4">  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Как долго ждать вывода средств?</h3>  
            <p class="text-sm sm:text-base text-gray-300">Время обработки зависит от выбранного метода. Криптовалюты: 5-15 минут, электронные кошельки: до 1 часа, банковские карты: до 24 часов.</p>  
        </div>  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Нужна ли верификация для вывода?</h3>  
            <p class="text-sm sm:text-base text-gray-300">Да, верификация требуется при первом выводе средств для обеспечения безопасности ваших средств.</p>  
        </div>  
        <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Есть ли комиссия за транзакции?</h3>  
            <p class="text-sm sm:text-base text-gray-300">VAVADA не взимает комиссию за депозиты и выводы. Возможны комиссии платежных систем.</p>  
        </div>  
    </div>  
</section>   
</main>

        <footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,  
    },  

    // Регистрация  
    {  
        id: "registration",  
        filename: "registration",  
        title: "Регистрация в VAVADA - Создать аккаунт | Бонус за регистрацию",  
        description: "Регистрация в казино VAVADA за 1 минуту ✓ Бонус 100 000₽ за создание аккаунта ✓ Простая верификация ✓ Быстрый вход в личный кабинет", 
        dataLink: "https://vavada.c-wn.ru", 
        keywords: "регистрация вавада, создать аккаунт vavada, вавада вход, регистрация vavada казино",  
        canonical: "https://krustovavada.com/registration",  
        ogImage: "https://krustovavada.com/images/og-registration.jpg",  
        type: "registration",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/registration",  
        },
        staticContent: ` 
         <div class="flex flex-col min-h-screen">  
    <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Зарегистрироваться</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white font-semibold">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>

<!-- Main Content Block для registration.html -->  
<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-8 mb-12">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">  
            <div class="relative z-10">  
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">  
                    Регистрация в VAVADA  
                </h1>  
                <p class="text-xl text-gray-300 mb-8">  
                    Создайте аккаунт за 1 минуту и получите приветственный бонус 100 000₽  
                </p>  
                <div class="grid grid-cols-2 gap-4 mb-8">  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center">  
                        <div class="text-2xl font-bold text-[#ff424d]">1 мин</div>  
                        <div class="text-gray-400">Регистрация</div>  
                    </div>  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-4 text-center">  
                        <div class="text-2xl font-bold text-[#ff424d]">100%</div>  
                        <div class="text-gray-400">Безопасность</div>  
                    </div>  
                </div>  
                <a href="#register-form" class="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#ff424d] hover:bg-[#ff2c39] transition-colors shadow-lg shadow-[#ff424d]/20">  
                    Создать аккаунт  
                </a>  
            </div>  
            <div class="hidden md:block relative z-10">  
                <div class="aspect-square bg-gradient-to-br from-[#ff424d]/20 to-[#2a2a42] rounded-lg shadow-xl"></div>  
            </div>  
        </div>  
        <div class="absolute inset-0 bg-gradient-to-r from-[#ff424d]/10 to-transparent"></div>  
    </section>  

    <!-- Навигация -->  
    <nav class="bg-[#2a2a42] rounded-xl p-6 mb-8">  
        <ul class="flex flex-wrap gap-4">  
            <li><a href="#steps" class="text-[#ff424d] hover:text-[#ff2c39]">Как зарегистрироваться</a></li>  
            <li><a href="#benefits" class="text-[#ff424d] hover:text-[#ff2c39]">Преимущества</a></li>  
            <li><a href="#verification" class="text-[#ff424d] hover:text-[#ff2c39]">Верификация</a></li>  
            <li><a href="#faq" class="text-[#ff424d] hover:text-[#ff2c39]">FAQ</a></li>  
        </ul>  
    </nav>  

    <!-- Шаги регистрации -->  
    <section id="steps" class="bg-[#2a2a42] rounded-xl p-8 mb-8" itemscope itemtype="https://schema.org/HowTo">  
        <h2 class="text-2xl font-bold text-white mb-6" itemprop="name">Как зарегистрироваться в VAVADA</h2>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6" itemprop="step" itemscope itemtype="https://schema.org/HowToStep">  
                <div class="text-[#ff424d] text-4xl font-bold mb-4">1</div>  
                <h3 class="text-xl font-semibold text-white mb-4" itemprop="name">Заполните форму</h3>  
                <div itemprop="text" class="text-gray-300">  
                    <ul class="space-y-2">  
                        <li>• Укажите email</li>  
                        <li>• Придумайте пароль</li>  
                        <li>• Выберите валюту</li>  
                    </ul>  
                </div>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6" itemprop="step" itemscope itemtype="https://schema.org/HowToStep">  
                <div class="text-[#ff424d] text-4xl font-bold mb-4">2</div>  
                <h3 class="text-xl font-semibold text-white mb-4" itemprop="name">Подтвердите email</h3>  
                <div itemprop="text" class="text-gray-300">  
                    <ul class="space-y-2">  
                        <li>• Проверьте почту</li>  
                        <li>• Перейдите по ссылке</li>  
                        <li>• Активируйте аккаунт</li>  
                    </ul>  
                </div>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6" itemprop="step" itemscope itemtype="https://schema.org/HowToStep">  
                <div class="text-[#ff424d] text-4xl font-bold mb-4">3</div>  
                <h3 class="text-xl font-semibold text-white mb-4" itemprop="name">Получите бонус</h3>  
                <div itemprop="text" class="text-gray-300">  
                    <ul class="space-y-2">  
                        <li>• Пополните счет</li>  
                        <li>• Активируйте бонус</li>  
                        <li>• Начните игру</li>  
                    </ul>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Преимущества -->  
    <section id="benefits" class="bg-[#2a2a42] rounded-xl p-8 mb-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Преимущества регистрации</h2>  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <ul class="space-y-4 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Приветственный бонус 100 000₽  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        100 фриспинов за регистрацию  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Еженедельный кэшбэк до 10%  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Участие в турнирах и акциях  
                    </li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <ul class="space-y-4 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Быстрые выплаты выигрышей  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Круглосуточная поддержка  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Программа лояльности  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-3">✓</span>  
                        Защита персональных данных  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- Верификация -->  
    <section id="verification" class="bg-[#2a2a42] rounded-xl p-8 mb-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Верификация аккаунта</h2>  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Необходимые документы</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">•</span>  
                        Паспорт или ID-карта  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">•</span>  
                        Подтверждение адреса  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">•</span>  
                        Селфи с документом  
                    </li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Сроки проверки</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">•</span>  
                        Стандартная проверка: до 24 часов  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">•</span>  
                        Ускоренная верификация: 1-2 часа  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- FAQ -->  
    <section id="faq" class="bg-[#2a2a42] rounded-xl p-8">  
        <h2 class="text-2xl font-bold text-white mb-6">Часто задаваемые вопросы</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-3">Можно ли создать второй аккаунт?</h3>  
                <p class="text-gray-300">Нет, правила казино разрешают иметь только один аккаунт. Создание мультиаккаунтов запрещено.</p>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-3">Когда нужно проходить верификацию?</h3>  
                <p class="text-gray-300">Верификация требуется при первом выводе средств или при достижении определенной суммы выигрыша.</p>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-3">Что делать если забыл пароль?</h3>  
                <p class="text-gray-300">Воспользуйтесь функцией восстановления пароля через email или обратитесь в службу поддержки.</p>  
            </div>  
        </div>  
    </section>  
</main>

        <footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,  
    },  

    // FAQ  
    {  
        id: "faq",  
        filename: "faq",  
        title: "FAQ VAVADA - Ответы на частые вопросы | Служба поддержки",  
        description: "Часто задаваемые вопросы о казино VAVADA ✓ Правила и условия ✓ Информация о бонусах ✓ Особенности платежей ✓ Техническая поддержка 24/7", 
        dataLink: "https://vavada.c-wn.ru", 
        keywords: "вавада faq, вопросы vavada, поддержка вавада, помощь vavada казино",  
        canonical: "https://krustovavada.com/faq",  
        ogImage: "https://krustovavada.com/images/og-faq.jpg",  
        type: "faq",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/faq",  
        },
        staticContent: ` 
         <div class="flex flex-col min-h-screen">  
     <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Полезные советы</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>  

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a>  
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/mirrors.html" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>

<!-- Main Content Block для faq.html -->  
<main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-4 sm:p-8 mb-6 sm:mb-12">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">  
            <div class="relative z-10">  
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">  
                    Часто задаваемые вопросы  
                </h1>  
                <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">  
                    Ответы на популярные вопросы о казино VAVADA. Все что нужно знать о регистрации, играх и выплатах  
                </p>  
                <div class="flex flex-wrap gap-4">  
                    <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#ff424d] text-white font-semibold hover:bg-[#ff2c39] transition-colors">  
                        Связаться с поддержкой  
                    </a>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Навигация -->  
    <nav class="bg-[#2a2a42] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">  
        <ul class="flex flex-nowrap sm:flex-wrap gap-4 min-w-max sm:min-w-0">  
            <li><a href="#account" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Аккаунт</a></li>  
            <li><a href="#finance" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Финансы</a></li>  
            <li><a href="#games" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Игры</a></li>  
            <li><a href="#security" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Безопасность</a></li>  
            <li><a href="#loyalty" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Программа лояльности</a></li>  
            <li><a href="#contact" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Поддержка</a></li>  
        </ul>  
    </nav>  

    <!-- Аккаунт и регистрация -->  
    <section id="account" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Аккаунт и регистрация</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как зарегистрироваться в VAVADA?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Нажмите кнопку "Регистрация", заполните форму с email, придумайте пароль и подтвердите email. Также доступна быстрая регистрация через социальные сети или в один клик.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как восстановить доступ к аккаунту?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Используйте функцию "Забыли пароль" на странице входа. Введите email, и мы отправим инструкции по восстановлению. При проблемах обратитесь в поддержку.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Зачем нужна верификация?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Верификация подтверждает личность игрока и требуется для безопасности аккаунта. Необходима при первом выводе средств. Загрузите документы в личном кабинете.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Финансовые вопросы -->  
    <section id="finance" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Финансовые вопросы</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Какие методы депозита доступны?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Принимаем банковские карты (VISA, Mastercard, МИР), криптовалюты (BTC, ETH, USDT) и электронные кошельки. Минимальный депозит - 100₽.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как быстро происходят выплаты?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Время вывода зависит от метода: криптовалюты 5-15 минут, электронные кошельки до 1 часа, банковские карты 1-24 часа.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Есть ли комиссия за транзакции?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    VAVADA не взимает комиссию за депозиты и выводы. Возможны комиссии платежных систем, о которых мы предупреждаем перед транзакцией.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Игры -->  
    <section id="games" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Игры</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Какие игры доступны?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Более 7000 игр: слоты, live-казино, настольные игры (рулетка, блэкджек, покер), игры с джекпотами от ведущих провайдеров.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Можно ли играть бесплатно?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Да, доступен демо-режим для большинства слотов и настольных игр. Live-казино доступно только в режиме реальных денег.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как работают джекпоты?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    В играх с джекпотами часть ставок идет в общий призовой фонд. Выигрыш может быть фиксированным или прогрессивным, растущим с каждой ставкой.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Безопасность -->  
    <section id="security" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Безопасность</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как защищены мои данные?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Используем SSL-шифрование, двухфакторную аутентификацию и современные протоколы безопасности. Данные хранятся на защищенных серверах.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как обеспечивается честность игр?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Все игры используют генератор случайных чисел (RNG), сертифицированный независимыми лабораториями. Результаты игр не могут быть предсказаны или изменены.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Программа лояльности -->  
    <section id="loyalty" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Программа лояльности</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Как работает VIP программа?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Играйте и получайте очки опыта (XP). С новым уровнем открываются повышенный кэшбэк, персональные бонусы и специальные турниры.  
                </p>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Какие бывают бонусы?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Приветственный бонус, еженедельный кэшбэк, фриспины за депозиты, подарки на день рождения и специальные акции. Условия отыгрыша указаны в правилах.  
                </p>  
            </div>  
        </div>  
    </section>  

    <!-- Поддержка -->  
    <section id="contact" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Служба поддержки</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Онлайн чат 24/7</h3>  
                <p class="text-gray-300 mb-4">Самый быстрый способ получить помощь</p>  
                <button class="w-full bg-[#ff424d] text-white rounded-xl py-3 hover:bg-[#ff2c39] transition-colors">  
                    Начать чат  
                </button>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Email поддержка</h3>  
                <p class="text-gray-300 mb-4">Для подробных запросов</p>  
                <a href="mailto:support@vavada.com" class="block w-full text-center bg-[#2a2a42] text-white rounded-xl py-3 hover:bg-[#313151] transition-colors">  
                 support@vavada.com  
                </a>  
            </div>  

            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Telegram канал</h3>  
                <p class="text-gray-300 mb-4">Новости и оперативные ответы</p>  
                <a href="https://t.me/vavada_casino" class="block w-full text-center bg-[#2a2a42] text-white rounded-xl py-3 hover:bg-[#313151] transition-colors">  
                    @vavada_casino  
                </a>  
            </div>  
        </div>  

        <!-- Дополнительная информация -->  
        <div class="mt-6 bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
            <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">График работы поддержки</h3>  
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">  
                <div>  
                    <h4 class="text-[#ff424d] font-medium mb-2">Онлайн чат и Telegram</h4>  
                    <p class="text-gray-300">Круглосуточно без выходных</p>  
                </div>  
                <div>  
                    <h4 class="text-[#ff424d] font-medium mb-2">Email поддержка</h4>  
                    <p class="text-gray-300">Ответ в течение 24 часов</p>  
                </div>  
            </div>  
        </div>  
    </section>  

    <!-- Полезные ресурсы -->  
    <section class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mt-6 sm:mt-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Полезные ресурсы</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            <a href="/terms" class="bg-[#1c1c2d] rounded-xl p-6 hover:bg-[#232338] transition-colors">  
                <h3 class="text-xl font-semibold text-white mb-2">Правила и условия</h3>  
                <p class="text-gray-300">Подробная информация об использовании сервиса</p>  
            </a>  

            <a href="/responsible-gaming" class="bg-[#1c1c2d] rounded-xl p-6 hover:bg-[#232338] transition-colors">  
                <h3 class="text-xl font-semibold text-white mb-2">Ответственная игра</h3>  
                <p class="text-gray-300">Рекомендации по безопасной игре</p>  
            </a>  

            <a href="/how-to-play" class="bg-[#1c1c2d] rounded-xl p-6 hover:bg-[#232338] transition-colors">  
                <h3 class="text-xl font-semibold text-white mb-2">Как играть</h3>  
                <p class="text-gray-300">Руководства и обучающие материалы</p>  
            </a>  
        </div>  
    </section>  
</main>  

        <footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,  
    },  

    // Загрузки  
    {  
        id: "downloads",  
        filename: "downloads",  
        title: "Скачать VAVADA - Мобильное приложение казино для Android и iOS",  
        description: "Скачать официальное приложение VAVADA ✓ Версия для Android и iOS ✓ Мобильная версия сайта ✓ Улучшенная производительность и доступ офлайн", 
        dataLink: "https://vavada.c-wn.ru", 
        keywords: "скачать вавада, приложение vavada, мобильная версия вавада, vavada android ios",  
        canonical: "https://krustovavada.com/downloads",  
        ogImage: "https://krustovavada.com/images/og-downloads.jpg",  
        type: "downloads",  
        hreflangs: {  
            "x-default": "https://krustovavada.com/downloads",  
        },
        staticContent: ` 
         <div class="flex flex-col min-h-screen">  
     <header class="bg-[#1c1c2d] rounded-lg shadow-lg p-6 mb-8">  
    <!-- Хлебные крошки -->  
    <nav aria-label="Навигационная цепочка" class="mb-6">  
        <ol class="flex text-sm" itemscope itemtype="https://schema.org/BreadcrumbList">  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <a href="/" itemprop="item" class="text-gray-400 hover:text-white">  
                    <span itemprop="name">Главная</span>  
                </a>  
                <meta itemprop="position" content="1" />  
            </li>  
            <li class="mx-2 text-gray-400">/</li>  
            <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">  
                <span itemprop="name" class="text-gray-400">Download</span>  
                <meta itemprop="position" content="2" />  
            </li>  
        </ol>  
    </nav>   

    <!-- Основная навигация -->  
    <nav class="mb-6" aria-label="Основная навигация">  
        <!-- Desktop навигация -->  
        <div class="flex flex-wrap justify-between items-center">  
            <div class="flex items-center">  
                <a href="/" class="flex items-center mr-6">  
                    <div class="text-2xl font-bold text-[#ff424d] hover:text-[#ff5a64]">  
                        VAVADA  
                    </div>  
                </a>  
                <!-- Desktop меню -->  
                <div class="hidden md:flex items-center space-x-6">  
                    <a href="/" class="text-gray-300 hover:text-white">Главная</a>  
                    <a href="/mirrors.html" class="text-gray-300 hover:text-white">Зеркала</a>  
                    <a href="/slots.html" class="text-gray-300 hover:text-white">Слоты</a>  
                    <a href="/bonuses.html" class="text-gray-300 hover:text-white">Бонусы</a>  
                    <a href="/registration.html" class="text-gray-300 hover:text-white">Регистрация</a>  
                    <a href="/download.html" class="text-gray-300 hover:text-white font-semibold">Скачать</a>  
                    <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>  
                </div>  
            </div>  

            <!-- Desktop кнопки авторизации -->  
            <div class="hidden md:flex items-center space-x-4">  
                <a href="/login" class="text-gray-300 hover:text-white">  
                    Войти  
                </a>  
                <a href="/registration.html" class="bg-[#ff424d] text-white px-6 py-2 rounded hover:bg-[#ff5a64] transition-colors">  
                    Регистрация  
                </a>  
            </div>  

            <!-- Mobile меню кнопка -->  
            <button class="md:hidden bg-[#2a2a42] p-2 rounded-lg" id="mobile-menu-button">  
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
            </button>  
        </div>  

        <!-- Mobile меню (изначально скрыто) -->  
        <div class="md:hidden hidden" id="mobile-menu">  
            <div class="flex flex-col space-y-4 mt-4 px-2">  
                <a href="/" class="text-gray-300 hover:text-white py-2">Главная</a>  
                <a href="/mirrors.html" class="text-gray-300 hover:text-white py-2">Зеркала</a>  
                <a href="/slots.html" class="text-gray-300 hover:text-white py-2">Слоты</a>  
                <a href="/bonuses.html" class="text-gray-300 hover:text-white py-2">Бонусы</a>  
                <a href="/registration.html" class="text-gray-300 hover:text-white py-2">Регистрация</a>  
                <a href="/download.html" class="text-gray-300 hover:text-white py-2">Скачать</a> 
                <a href="/payments.html" class="text-gray-300 hover:text-white">Платежные методы</a>   
                <div class="pt-4 border-t border-gray-700">  
                    <a href="/registration.html" class="block bg-[#ff424d] text-white px-6 py-2 rounded text-center hover:bg-[#ff5a64] transition-colors">  
                        Регистрация  
                    </a>  
                    <a href="/login" class="block text-gray-300 hover:text-white text-center mt-4">  
                        Войти  
                    </a>  
                </div>  
            </div>  
        </div>  
    </nav>  

    <!-- JavaScript для мобильного меню -->  
    <script>  
        const mobileMenuButton = document.getElementById('mobile-menu-button');  
        const mobileMenu = document.getElementById('mobile-menu');  

        mobileMenuButton.addEventListener('click', () => {  
            mobileMenu.classList.toggle('hidden');  
        });  
    </script>  
</header>

<!-- Main Content Block для downloads.html -->  
<main class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">  
    <!-- Hero Section -->  
    <section class="relative rounded-xl overflow-hidden bg-[#232338] p-4 sm:p-8 mb-6 sm:mb-12">  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">  
            <div class="relative z-10">  
                <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">  
                    Мобильное приложение VAVADA  
                </h1>  
                <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">  
                    Играйте в любимые игры где угодно. Скачайте официальное приложение для iOS и Android  
                </p>  
                <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">  
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">4.8/5</div>  
                        <div class="text-sm sm:text-base text-gray-400">Рейтинг</div>  
                    </div>  
                    <div class="bg-[#2a2a42]/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center">  
                        <div class="text-xl sm:text-2xl font-bold text-[#ff424d]">1M+</div>  
                        <div class="text-sm sm:text-base text-gray-400">Загрузок</div>  
                    </div>  
                </div>  
            </div>  
            <div class="hidden md:block relative z-10">  
                <div class="aspect-square bg-gradient-to-br from-[#ff424d]/20 to-[#2a2a42] rounded-lg shadow-xl"></div>  
            </div>  
        </div>  
    </section>  

    <!-- Навигация -->  
    <nav class="bg-[#2a2a42] rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 overflow-x-auto">  
        <ul class="flex flex-nowrap sm:flex-wrap gap-4 min-w-max sm:min-w-0">  
            <li><a href="#platforms" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Платформы</a></li>  
            <li><a href="#installation" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Установка</a></li>  
            <li><a href="#features" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Преимущества</a></li>  
            <li><a href="#requirements" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">Требования</a></li>  
            <li><a href="#faq" class="text-sm sm:text-base text-[#ff424d] hover:text-[#ff2c39] whitespace-nowrap">FAQ</a></li>  
        </ul>  
    </nav>  

    <!-- QR-код и кнопки загрузки -->  
    <section class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">  
            <div class="text-center md:text-left">  
                <h2 class="text-xl sm:text-2xl font-bold text-white mb-4">Быстрая загрузка</h2>  
                <p class="text-gray-300 mb-4">Отсканируйте QR-код камерой телефона</p>  
            </div>  
            <div class="flex justify-center">  
                <div class="bg-white p-4 rounded-xl w-48 h-48">  
                    <!-- Здесь будет QR-код -->  
                    <div class="w-full h-full bg-[#1c1c2d]"></div>  
                </div>  
            </div>  
            <div class="flex flex-col gap-4">  
                <button class="flex items-center justify-center gap-2 bg-black text-white rounded-xl p-4 hover:bg-gray-900 transition-colors">  
                    <span class="text-2xl">App Store</span>  
                </button>  
                <button class="flex items-center justify-center gap-2 bg-[#ff424d] text-white rounded-xl p-4 hover:bg-[#ff2c39] transition-colors">  
                    <span class="text-2xl">Google Play</span>  
                </button>  
            </div>  
        </div>  
    </section>  

    <!-- Платформы -->  
    <section id="platforms" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Доступные платформы</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">  
            <!-- iOS -->  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">iOS приложение</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Поддержка iOS 12.0 и выше  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Оптимизация для iPhone и iPad  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Touch ID / Face ID вход  
                    </li>  
                </ul>  
            </div>  
            <!-- Android -->  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Android приложение</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Android 7.0 и выше  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Установка APK файла  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Биометрическая аутентификация  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- Инструкция по установке -->  
    <section id="installation" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Как установить</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">  
            <!-- iOS Installation -->  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Установка на iOS</h3>  
                <ol class="space-y-3 text-gray-300 list-decimal pl-4">  
                    <li>Откройте App Store</li>  
                    <li>Найдите "VAVADA Casino"</li>  
                    <li>Нажмите "Загрузить"</li>  
                    <li>Подтвердите установку</li>  
                    <li>Запустите приложение</li>  
                </ol>  
            </div>  
            <!-- Android Installation -->  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Установка на Android</h3>  
                <ol class="space-y-3 text-gray-300 list-decimal pl-4">  
                    <li>Скачайте APK файл</li>  
                    <li>Разрешите установку из неизвестных источников</li>  
                    <li>Откройте загруженный файл</li>  
                    <li>Нажмите "Установить"</li>  
                    <li>Запустите приложение</li>  
                </ol>  
            </div>  
        </div>  
    </section>  

    <!-- Преимущества -->  
    <section id="features" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Преимущества приложения</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Производительность</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Быстрый запуск игр  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Оптимизированная графика  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Экономия трафика  
                    </li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Безопасность</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Биометрическая защита  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Шифрование данных  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Безопасные платежи  
                    </li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Удобство</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Push-уведомления  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Быстрые депозиты  
                    </li>  
                    <li class="flex items-center">  
                        <span class="text-[#ff424d] mr-2">✓</span>  
                        Оффлайн режим  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- Системные требования -->  
    <section id="requirements" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8 mb-6 sm:mb-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Системные требования</h2>  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">iOS</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex justify-between">  
                        <span>Версия iOS:</span>  
                        <span>12.0 или выше</span>  
                    </li>  
                    <li class="flex justify-between">  
                        <span>Память:</span>  
                        <span>150 МБ</span>  
                    </li>  
                    <li class="flex justify-between">  
                        <span>Устройства:</span>  
                        <span>iPhone, iPad</span>  
                    </li>  
                </ul>  
            </div>  
            <div class="bg-[#1c1c2d] rounded-xl p-6">  
                <h3 class="text-xl font-semibold text-white mb-4">Android</h3>  
                <ul class="space-y-3 text-gray-300">  
                    <li class="flex justify-between">  
                        <span>Версия Android:</span>  
                        <span>7.0 или выше</span>  
                    </li>  
                    <li class="flex justify-between">  
                        <span>Память:</span>  
                        <span>100 МБ</span>  
                    </li>  
                  <li class="flex justify-between">  
                        <span>Процессор:</span>  
                        <span>1.2 GHz и выше</span>  
                    </li>  
                    <li class="flex justify-between">  
                        <span>ОЗУ:</span>  
                        <span>2 GB и выше</span>  
                    </li>  
                </ul>  
            </div>  
        </div>  
    </section>  

    <!-- FAQ -->  
    <section id="faq" class="bg-[#2a2a42] rounded-xl p-4 sm:p-8">  
        <h2 class="text-xl sm:text-2xl font-bold text-white mb-6">Частые вопросы</h2>  
        <div class="space-y-4">  
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Чем отличается приложение от сайта?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Приложение работает быстрее, экономит трафик, имеет улучшенную графику и дополнительные функции: биометрический вход, push-уведомления и оффлайн режим.  
                </p>  
            </div>  
            
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Безопасно ли устанавливать APK файл?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Да, если вы скачиваете файл с официального сайта VAVADA. Наше приложение имеет цифровую подпись и проверяется на вирусы.  
                </p>  
            </div>  
            
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Нужно ли обновлять приложение?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Рекомендуется всегда использовать последнюю версию для доступа к новым функциям и исправлениям безопасности. Приложение уведомит вас о доступных обновлениях.  
                </p>  
            </div>  
            
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Что делать если приложение не устанавливается?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Проверьте соответствие системным требованиям, наличие свободной памяти и разрешение на установку из неизвестных источников. При проблемах обратитесь в службу поддержки.  
                </p>  
            </div>  
            
            <div class="bg-[#1c1c2d] rounded-xl p-4 sm:p-6">  
                <h3 class="text-lg sm:text-xl font-semibold text-white mb-3">Поддерживаются ли все игры в приложении?</h3>  
                <p class="text-sm sm:text-base text-gray-300">  
                    Большинство игр доступно в мобильной версии. Каталог постоянно расширяется, некоторые игры могут быть оптимизированы специально для мобильных устройств.  
                </p>  
            </div>  
        </div>  
    </section>  
</main>  

        <footer class="bg-[#1c1c2d] text-gray-300 mt-12 border-t border-[#383856]">  
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">  
        <!-- Основные секции -->  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">  
            <!-- О казино -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">VAVADA</h2>  
                <ul class="space-y-3">  
                    <li><a href="/" class="hover:text-white transition-colors">Главная</a></li>  
                    <li><a href="/mirrors.html" class="hover:text-white transition-colors">Зеркала</a></li>  
                    <li><a href="/registration.html" class="hover:text-white transition-colors">Регистрация</a></li>  
                    <li><a href="/download.html" class="hover:text-white transition-colors">Скачать</a></li>  
                </ul>  
            </div>  

            <!-- Игры -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Игры</h2>  
                <ul class="space-y-3">  
                    <li><a href="/slots.html" class="hover:text-white transition-colors">Слоты</a></li>  
                    <li><a href="/slots.html#popular" class="hover:text-white transition-colors">Популярные</a></li>  
                    <li><a href="/slots.html#new" class="hover:text-white transition-colors">Новинки</a></li>  
                    <li><a href="/slots.html#jackpot" class="hover:text-white transition-colors">Джекпоты</a></li>  
                </ul>  
            </div>  

            <!-- Бонусы -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Бонусы</h2>  
                <ul class="space-y-3">  
                    <li><a href="/bonuses.html" class="hover:text-white transition-colors">Все бонусы</a></li>  
                    <li><a href="/bonuses.html#welcome" class="hover:text-white transition-colors">Приветственный бонус</a></li>  
                    <li><a href="/bonuses.html#reload" class="hover:text-white transition-colors">Релоад бонусы</a></li>  
                    <li><a href="/bonuses.html#cashback" class="hover:text-white transition-colors">Кэшбэк</a></li>  
                </ul>  
            </div>  

            <!-- Помощь -->  
            <div>  
                <h2 class="text-xl font-bold text-white mb-4">Поддержка</h2>  
                <ul class="space-y-3">  
                    <li><a href="/faq.html" class="hover:text-white transition-colors">FAQ</a></li>  
                    <li><a href="/faq.html#payments" class="hover:text-white transition-colors">Платежи</a></li>  
                    <li><a href="/faq.html#security" class="hover:text-white transition-colors">Безопасность</a></li>  
                    <li><a href="/faq.html#support" class="hover:text-white transition-colors">Контакты</a></li>  
                </ul>  
            </div>  
        </div>  

        <!-- Платежные методы -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <h3 class="text-lg font-semibold text-white mb-4">Способы оплаты</h3>  
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">  
                <div class="bg-[#232338] rounded p-3 text-center">Visa</div>  
                <div class="bg-[#232338] rounded p-3 text-center">MasterCard</div>  
                <div class="bg-[#232338] rounded p-3 text-center">МИР</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Qiwi</div>  
                <div class="bg-[#232338] rounded p-3 text-center">ЮMoney</div>  
                <div class="bg-[#232338] rounded p-3 text-center">Tether</div>  
            </div>  
        </div>  

        <!-- Ответственная игра и лицензия -->  
        <div class="border-t border-[#383856] pt-8 mb-8">  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Ответственная игра</h3>  
                    <p class="text-sm">  
                        VAVADA поддерживает принципы ответственной игры и предлагает инструменты самоконтроля.   
                        Установите личные лимиты на депозиты, ставки и игровое время в личном кабинете.  
                    </p>  
                </div>  
                <div>  
                    <h3 class="text-lg font-semibold text-white mb-4">Лицензия</h3>  
                    <p class="text-sm">  
                        VAVADA работает по лицензии Curacao eGaming №8048/JAZ2014-006.   
                        Все игры сертифицированы и регулярно проходят проверку на честность.  
                    </p>  
                </div>  
            </div>  
        </div>  

        <!-- Нижняя секция -->  
        <div class="border-t border-[#383856] pt-8">  
            <div class="flex flex-col md:flex-row justify-between items-center">  
                <div class="text-sm mb-4 md:mb-0">  
                    © 2024 VAVADA. Все права защищены.  
                </div>  
                <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm text-center">  
                    <a href="/faq.html#terms" class="hover:text-white transition-colors">Условия использования</a>  
                    <a href="/faq.html#privacy" class="hover:text-white transition-colors">Конфиденциальность</a>  
                    <a href="/faq.html#aml" class="hover:text-white transition-colors">AML политика</a>  
                </div>  
            </div>  
        </div>  
    </div>  
</footer>  
</div>
        `,  
    }  
  ],
};
