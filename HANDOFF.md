# Adtype Website Prototype Handoff

이 문서는 다른 PC에서 애드타입 홈페이지 작업을 이어받기 위한 핸드오프 문서입니다.

## 1. 저장소 받기

```bash
git clone https://github.com/Yangjacob93/adtype-website-prototype.git
cd adtype-website-prototype
```

GitHub Desktop을 쓰는 경우에는 아래 저장소를 clone하면 됩니다.

`https://github.com/Yangjacob93/adtype-website-prototype`

## 2. 현재 작업물 위치

메인 작업물은 `outputs/` 폴더에 있습니다.

- `outputs/adtype-for-brands.html`  
  브랜드사 대상 메인 페이지입니다. 현재 가장 중요한 메인 작업 파일입니다.

- `outputs/adtype-for-brands-local-preview.html`  
  로컬 미리보기용 파일입니다.

- `outputs/adtype-for-brands-imweb-snippet.html`  
  아임웹 실장용으로 정리한 스니펫입니다.

- `outputs/adtype-brand-presence.html`  
  상세 페이지: 브랜드 존재감 확대

- `outputs/adtype-brand-positioning.html`  
  상세 페이지: 브랜드 포지셔닝 강화

- `outputs/adtype-brand-purchase-reason.html`  
  상세 페이지: 구매 이유 형성

- `outputs/adtype-brand-launch-renewal.html`  
  상세 페이지: 신제품/리뉴얼 인식 전환

- `outputs/adtype-brand-offline-traffic.html`  
  상세 페이지: 오프라인 접점 기반 유입 확대

- `outputs/adtype-brand-performance-loop.html`  
  상세 페이지: 브랜드 지표 개선과 캠페인 고도화

## 3. 에셋 위치

이미지, 영상, 로고, PDF는 `outputs/assets/`에 있습니다.

주요 파일:

- `adtype-hero2.mp4` - 현재 히어로 배경 영상
- `adtype-map-simulator.mp4` - Adtype Map / Simulator 영상
- `survey-review-radar.mp4` - Survey / Review Radar 영상
- `mental-market-clip.mp4` - Mental Market 영상
- `media-planning-system.mp4` - Media Planning System 영상
- `hongdae-sync-creative.mp4` - 크리에이티브/현장 영상
- `ad-effect-clip.mp4` - 성과 관리 시스템 영상
- `adtype-company-profile.pdf` - 회사소개서 PDF
- `adtype-logo-*.png` - 애드타입 로고
- `creative-*.jpg` - OOH 크리에이티브 섹션용 이미지

## 4. 로컬에서 미리보기

파일을 직접 열어도 보이지만, 영상/상대경로 확인을 위해 로컬 서버로 보는 것을 권장합니다.

```bash
node work/static-server.js 8777
```

그 다음 브라우저에서 아래 주소로 접속합니다.

```text
http://127.0.0.1:8777/outputs/adtype-for-brands.html
```

상세 페이지 예시:

```text
http://127.0.0.1:8777/outputs/adtype-brand-presence.html
http://127.0.0.1:8777/outputs/adtype-brand-performance-loop.html
```

## 5. 아임웹 실장 관련

이 작업은 아임웹 빌더에 넣는 것을 전제로 하고 있습니다.

아임웹은 자체 스타일이 강하게 개입하는 경우가 많아서, HTML 안의 CSS는 대부분 특정 wrapper id를 기준으로 강하게 작성되어 있습니다.  
예를 들어 페이지별로 `#adtype-...` 형태의 wrapper를 두고, 그 안에서 스타일을 강제하는 방식입니다.

작업할 때 유의할 점:

- CSS 선택자는 가능한 한 wrapper id 하위로 작성합니다.
- 아임웹 스타일 충돌을 막기 위해 폰트, margin, line-height, button 스타일은 명시적으로 지정합니다.
- 텍스트가 `????`로 깨지는 경우는 파일 인코딩 문제일 가능성이 큽니다. 반드시 UTF-8로 저장합니다.
- 아임웹 최종 반영용 파일은 `outputs/adtype-for-brands-imweb-snippet.html`을 기준으로 보면 됩니다.

## 6. GitHub에 올리지 않은 파일

다음 파일들은 GitHub에 올리지 않았습니다.

- `outputs/adtype-for-brands-imweb-package.zip`
- `outputs/adtype-for-brands-imweb-package/`
- `outputs/qa-*.png`
- `outputs/ref-*.png`
- `work/qa-*.png`
- `work/video-frames/`
- `work/video-browser-frames/`

이유:

- ZIP과 패키지 폴더는 원본 파일로 다시 만들 수 있는 배포용 중복 파일입니다.
- QA 이미지는 확인용 캡처라서 작업을 이어가는 데 필수 파일이 아닙니다.
- GitHub 저장소를 가볍게 유지하기 위해 제외했습니다.

## 7. 현재 디자인 방향

전체 디자인 기준:

- 키 컬러: `#EB4200`
- 배경: White / Light Gray 중심
- 폰트: Pretendard
- 스타일 방향: Toss/Toss Ads처럼 단순하지만 전문적으로 보이는 B2B 랜딩
- 과도한 장식보다 큰 타이포, 명확한 구조, 신뢰감 있는 밀도를 우선합니다.

메인 페이지 주요 섹션:

1. Hero
2. 브랜드 소개/철학 섹션
3. Partners & Clients
4. 영상 확장 섹션
5. Adtype OOH Technology
6. Solutions
7. FAQ / Insights / Closing

## 8. 현재 남은 고민과 다음 작업

최근 논의의 핵심은 상세 페이지들이 서로 너무 비슷해 보인다는 점이었습니다.

현재 상세 페이지들은 텍스트와 일부 모듈은 다르지만, 전체 구조가 비슷해서 사용자가 여러 페이지를 볼 때 같은 템플릿처럼 느낄 수 있습니다.

다음 작업 방향:

- 상세 페이지마다 다른 설득 장치를 둡니다.
- 단순히 카피만 바꾸는 것이 아니라, 페이지 구조와 시각 장치도 과제별로 다르게 설계합니다.

추천 방향:

- 브랜드 존재감 확대: 생활권 침투 / 반복 접점 구조
- 브랜드 포지셔닝 강화: 인식 맵 / 경쟁 브랜드 비교
- 구매 이유 형성: 리뷰·서베이 기반 소비자 언어
- 신제품·리뉴얼: 런칭 타임라인 / Before-After
- 오프라인 유입 확대: 검색·방문·앱 유입 퍼널
- 브랜드 지표 개선: 캠페인 리뷰룸 / 다음 전략 의사결정 보드

특히 `outputs/adtype-brand-performance-loop.html`는 먼저 개선할 만합니다.  
현재는 다른 상세 페이지와 구조가 너무 비슷하므로, “성과 리포트 페이지”가 아니라 “다음 캠페인을 결정하는 전략 리뷰 페이지”처럼 재설계하는 것이 좋습니다.

## 9. 작업 후 Git 반영

작업 후에는 아래 순서로 반영합니다.

```bash
git status
git add .
git commit -m "Describe changes"
git push
```

다른 PC에서 작업을 시작하기 전에는 항상 먼저 pull합니다.

```bash
git pull
```

