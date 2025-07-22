<script setup>
  useSeoMeta({
    title: '바보리보',
    description: '바보리보의 사이트입니다!',
    ogTitle: '바보리보',
    ogDescription: '바보리보의 사이트입니다!',
    ogUrl: 'https://baboribo.yume.place',
    ogImage: '/d80eac4321e1b29abfbef07fa38d660c-removebg-preview.png',
    twitterTitle: '바보리보',
    twitterDescription: '바보리보의 사이트입니다!',
    twitterCard: 'summary',
    twitterImage: '/d80eac4321e1b29abfbef07fa38d660c-removebg-preview.png'
  })

  useHead({
    htmlAttrs: {
      lang: 'ko-KR'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/d80eac4321e1b29abfbef07fa38d660c-removebg-preview.png'
      }
    ]
  })
  import { GitHubIcon, RobloxIcon } from 'vue3-simple-icons'
  import './assets/css/main.css'
  import './assets/css/font.css'
</script>
<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex col-span-2 w-full"> <!-- 프로필 그룹((좌)프로필 정보, (우)자기소개, 관심사, 등) -->
      <div class="flex flex-col w-full gap-3"> <!-- 프로필과 언어별 표시이름이 있는 곳 -->
        <div class="flex items-center gap-4">
          <img class="avatar" src="./public/d80eac4321e1b29abfbef07fa38d660c-removebg-preview.png" alt="Avatar"/>
          <div class="flex flex-col pb-1">
            <div class="flex items-center gap-2">
              <h2>바보리보</h2>
              <p>@baboribo</p>
            </div>
            <div class="flex items-center">
              <p>"</p>
              <p id="self-introduction">일단 뭐든지 질투하는 사람.</p>
              <p>"</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full gap-4">
          <div class="p-1 flex flex-col">
            <h4>언어별 표시이름</h4>
            <ul class="flex gap-8">
              <li class="flex items-center gap-2.5">
                <img class="flag" src="./public/flags/UI-Flags-kr-South Korea-4x3.svg" alt="Korea(South) Flag" />
                <div class="flex flex-col gap-0">
                  <span>한국어</span>
                  <h5>바보리보</h5>
                </div>
              </li>
              <li class="flex items-center gap-2.5">
                <img class="flag" src="./public/flags/UI-Flags-jp-Japan-4x3.svg" alt="Japan Flag" />
                <div class="flex flex-col gap-0">
                  <span>일본어</span>
                  <h5>バボリボ</h5>
                </div>
              </li>
              <li class="flex items-center gap-2.5">
                <img class="flag" src="./public/flags/UI-Flags-gb-United Kingdom-4x3.svg" alt="United Kingdom Flag" />
                <div class="flex flex-col gap-0">
                  <span>영어</span>
                  <h5>baboribo</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> <!-- 프로필과 언어별 표시이름이 있는 곳 [끝지점] -->
      <div class="flex flex-col w-full gap-5"> <!-- 자기소개와 관심사 그룹 -->
        <div class="flex flex-col w-full gap-1">
          <h4>자기소개</h4>
          <p>안녕하세요, 저는 바보리보입니다. Vue.js를 배우고 있습니다.</p>
        </div>
        <div class="flex flex-col gap-1">
          <h4>관심사</h4>
          <ul class="flex gap-2">
            <li class="tag">음악</li>
            <li class="tag">그림</li>
            <li class="tag">웹 디자인</li>
            <li class="tag">웹 개발</li>
          </ul>
        </div>
      </div> <!-- 자기소개와 관심사 그룹 [끝지점] -->
    </div>
    <h3 class="group-h3">링크</h3>
    <ul class="flex flex-col gap-2 w-full mt-2">
      <li>
        <a class="link-card-ui" href="https://github.com/baboribo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon size="28" />
          <div class="flex items-center gap-4">
            <h4>GitHub 프로필</h4>
            <p>바보리보의 GitHub 프로필을 확인하세요.</p>
          </div>
          <Icon name="mingcute:arrow-right-up-line" style="color: #E4E3ED" size="24" />
        </a>
      </li>
      <li>
        <a class="link-card-ui" href="https://www.roblox.com/users/244515714/profile" target="_blank" rel="noopener noreferrer">
          <RobloxIcon size="28" />
          <div class="flex items-center gap-4">
            <h4>Roblox 프로필</h4>
            <p>저의 Roblox 프로필이에요.</p>
            <Icon name="mingcute:arrow-right-up-line" style="color: #E4E3ED" size="24" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
