import { defineConfig } from 'vitepress';

export const configKo = defineConfig({
  lang: 'ko-KR',
  description: '코드베이스를 AI 친화적인 형식으로 패키징',
  themeConfig: {
    nav: [
      { text: '가이드', link: '/ko/guide/' },
      { text: 'Discord 참여', link: 'https://discord.gg/wNYzTwZFku' },
    ],
    sidebar: {
      '/ko/guide/': [
        {
          text: '가이드',
          items: [
            { text: '시작하기', link: '/ko/guide/' },
            { text: '설치', link: '/ko/guide/installation' },
            { text: '기본 사용법', link: '/ko/guide/usage' },
            { text: '프롬프트 예제', link: '/ko/guide/prompt-examples' },
            { text: '출력 형식', link: '/ko/guide/output' },
            { text: '명령행 옵션', link: '/ko/guide/command-line-options' },
            { text: '원격 저장소 처리', link: '/ko/guide/remote-repository-processing' },
            { text: '설정', link: '/ko/guide/configuration' },
            { text: '사용자 지정 지시사항', link: '/ko/guide/custom-instructions' },
            { text: '주석 제거', link: '/ko/guide/comment-removal' },
            { text: '보안', link: '/ko/guide/security' },
            {
              text: '팁과 요령',
              items: [{ text: '모범 사례', link: '/ko/guide/tips/best-practices' }],
            },
            {
              text: '개발',
              items: [
                { text: '기여하기', link: '/ko/guide/development/' },
                { text: '환경 설정', link: '/ko/guide/development/setup' },
              ],
            },
          ],
        },
      ],
    },
  },
});