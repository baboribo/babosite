<script setup>
  import { GitHubIcon } from 'vue3-simple-icons'
</script>
<template>
  <div className="max-w-4xl mx-auto">
    <div>
      <img class="rounded-full" style="width: 100px; height: 100px;" src="./public/d80eac4321e1b29abfbef07fa38d660c.jpg" alt="Avatar"/>
      <div className="flex justify-between w-full gap-4">
        <div>
          <h2>바보리보</h2>
          <p>@baboribo</p>
        </div>
        <div className="bg-slate-200 p-2 rounded-xl flex items-center gap-2">
          <h5>언어별 닉네임</h5>
          <ul>
            <li>(한국어)바보리보</li>
            <li>(영어)baboribo</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="rounded-xl mt-3">
      <p>나를 한마디로: 엮이면 피곤하게 만들어주마!</p>
      <p>나의 관심사: 웹 디자인, 그림 그리기, Vue.js, Nuxt.js, Svelte.js, Tailwind CSS</p>
    </div>
    <h3>자기소개</h3>
    <p>안녕하세요, 저는 바보리보입니다. Vue.js를 배우고 있습니다.</p>
    <h3>링크</h3>
    <ul>
      <li className="flex flex-col-3 gap-2">
        <a className="flex flex-col items-left pt-1" href="https://github.com/baboribo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon size="30" />
          <div>
            <h4>GitHub 프로필</h4>
            <p>바보리보의 GitHub 프로필을 확인하세요.</p>
          </div>
        </a>
        <a className="flex flex-col items-left pt-1" href="https://github.com/baboribo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon size="30" />
          <div>
            <h4>GitHub 프로필</h4>
            <p>바보리보의 GitHub 프로필을 확인하세요.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
