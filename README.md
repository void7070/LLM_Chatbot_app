# chatbot-app (LLM / OpenAI version)

> ⚠️ **이 버전은 Dialogflow 버전이 아닌 LLM(OpenAI GPT) 버전입니다.**
>
> 원본 튜토리얼은 Dialogflow 기반이지만, 이 저장소는 챗봇 응답을 **OpenAI Chat Completions API(`gpt-3.5-turbo`)** 로 처리하도록 변경되었습니다.
> Dialogflow / MongoDB 관련 코드는 남아 있지만 **주석 처리되어 비활성** 상태입니다.

## 동작 방식

```
사용자 입력 (React 클라이언트)
   → POST /api/gpt/textQuery
   → Express 서버가 OpenAI gpt-3.5-turbo 호출
   → 응답을 화면에 렌더링
```

- **프론트엔드**: React 16 (Create React App), Redux, Ant Design
- **백엔드**: Express, OpenAI API 호출
- **사용 안 함(비활성)**: Dialogflow, MongoDB — 코드는 보존되어 있으나 동작하지 않음

## 설치 및 실행

1. `server/config/dev.js` 파일을 만듭니다. (`server/config/dev.js.example` 참고)
2. `dev.js` 안에 본인의 **OpenAI API 키**(`gptAPIKey`)를 넣습니다.
   - Dialogflow를 다시 쓰지 않는 한 Google / MongoDB 값은 비워 두어도 됩니다.
3. 루트 디렉토리에서 `npm install` (서버 의존성)
4. `client` 디렉토리에서 `npm install` (프론트엔드 의존성)
5. 루트에서 `npm run dev` — 서버(5000)와 클라이언트(3000)를 동시에 실행

> 🔒 `dev.js`와 `google-key.json`은 실제 키가 들어가는 파일이라 `.gitignore`에 의해 커밋되지 않습니다. 절대 그대로 올리지 마세요.

## 크레딧

원본 Dialogflow 챗봇 튜토리얼 기반 (by Jaewon Ahn):
https://www.youtube.com/watch?v=h01cuxhteOA&t=4138s
