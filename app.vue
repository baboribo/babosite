<script setup>
  import { GitHubIcon, RobloxIcon } from 'vue3-simple-icons'
  import './assets/css/main.css'
  import './assets/css/font.css'
</script>
<template>
  <div class="max-w-6xl mx-auto">
    <div>
      <div class="flex items-center gap-4">
        <img class="avatar" src="./public/d80eac4321e1b29abfbef07fa38d660c.jpg" alt="Avatar"/>
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
      <div class="flex flex-col mt-2 w-full gap-4">
        <div class="p-1 flex flex-col gap-0">
          <h4>언어별 표시이름</h4>
          <ul class="flex gap-8">
            <li class="flex items-center gap-2">
              <img class="flag" src="./public/flags/UI-Flags-kr-South Korea-4x3.svg" alt="Korea(South) Flag" />
              <div class="flex flex-col gap-0">
                <span>한국어</span>
                <h5>바보리보</h5>
              </div>
            </li>
            <li class="flex items-center gap-2">
              <img class="flag" src="./public/flags/UI-Flags-jp-Japan-4x3.svg" alt="Japan Flag" />
              <div class="flex flex-col gap-0">
                <span>일본어</span>
                <h5>バボリボ</h5>
              </div>
            </li>
            <li class="flex items-center gap-2">
              <img class="flag" src="./public/flags/UI-Flags-gb-United Kingdom-4x3.svg" alt="United Kingdom Flag" />
              <div class="flex flex-col gap-0">
                <span>영어</span>
                <h5>baboribo</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <h4>자기소개</h4>
      <p>안녕하세요, 저는 바보리보입니다. Vue.js를 배우고 있습니다.</p>
    </div>
    <div class="rounded-xl mt-3">
      <p>나를 한마디로: 엮이면 피곤하게 만들어주마!</p>
      <p>나의 관심사: 웹 디자인, 그림 그리기, Vue.js, Nuxt.js, Svelte.js, Tailwind CSS</p>
    </div>
    <h3>자기소개</h3>
    <p>안녕하세요, 저는 바보리보입니다. Vue.js를 배우고 있습니다.</p>
    <h3>링크</h3>
    <ul class="flex flex-col-4 gap-4 w-full mt-2">
      <li>
        <a class="link-card-ui" href="https://github.com/baboribo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon size="28" />
          <div>
            <h4>GitHub 프로필</h4>
            <p>바보리보의 GitHub 프로필을 확인하세요.</p>
          </div>
        </a>
      </li>
      <li>
        <a class="link-card-ui" href="https://github.com/baboribo" target="_blank" rel="noopener noreferrer">
          <RobloxIcon size="28" />
          <div>
            <h4>Roblox 프로필</h4>
            <p>바보리보의 Roblox 프로필을 확인하세요.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
