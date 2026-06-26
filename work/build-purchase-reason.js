const fs = require('fs');

const file = 'C:/Users/user/Documents/Codex/2026-06-25/dl/outputs/adtype-brand-purchase-reason.html';
let s = fs.readFileSync(file, 'utf8');

function replaceText(from, to) {
  if (!s.includes(from)) {
    console.warn('missing:', from.slice(0, 80));
  }
  s = s.split(from).join(to);
}

s = s.replace(/adtype-positioning/g, 'adtype-reason');

replaceText('브랜드 포지셔닝 강화 | Adtype', '구매 이유 형성 | Adtype');
replaceText('브랜드 과제 02 · 브랜드 포지셔닝 강화', '브랜드 과제 03 · 구매 이유 형성');
replaceText('시장 안에서 브랜드가 기억되는 방식을 설계합니다.', '소비자가 브랜드를 선택해야 할 이유를 설계합니다.');
replaceText(
  '브랜드가 단순히 알려지는 것을 넘어, 원하는 이미지와 의미로 기억되도록\n          소비자 인식과 시장 맥락에 맞는 OOH 캠페인을 설계합니다.',
  '인지된 브랜드가 실제 고려와 선택으로 이어지도록\n          리뷰, 서베이, 검색 맥락에서 구매 이유를 찾고 OOH 메시지와 접점 전략으로 바꿉니다.'
);

replaceText('브랜드는 보이는 것만으로 포지셔닝되지 않습니다.', '인지도는 구매 이유가 되지 않습니다.');
replaceText(
  `소비자가 브랜드를 알고 있어도 어떤 이미지로 기억하는지는 다를 수 있습니다.<br>
            프리미엄, 신뢰, 취향, 전문성, 웰니스 같은 인식은 메시지뿐 아니라
            브랜드가 놓이는 공간과 매체 맥락 안에서 함께 형성됩니다.`,
  `소비자가 브랜드를 알고 있어도 왜 선택해야 하는지 이해하지 못하면 구매 고려로 이어지지 않습니다.<br>
            제품의 장점, 리뷰 속 만족 포인트, 사용 맥락과 구매 장벽을 소비자 언어로 다시 읽어야 합니다.`
);
replaceText('우리 브랜드는 현재 어떤 이미지로 인식되고 있는가?', '소비자는 어떤 이유로 구매를 망설이고 있는가?');
replaceText('경쟁 브랜드와 비교했을 때 어떤 의미가 더 선명해야 하는가?', '우리 제품의 장점은 소비자 언어로 설득되고 있는가?');
replaceText('캠페인 이후 원하는 인식과 이미지가 실제로 강화되고 있는가?', '구매를 고려하는 순간에 어떤 메시지가 떠올라야 하는가?');

const strategyStart = s.indexOf('<section class="section section--soft" id="strategies">');
const strategyEnd = s.indexOf('    <section class="section">', strategyStart);
if (strategyStart < 0 || strategyEnd < 0) throw new Error('strategy section not found');
s = s.slice(0, strategyStart) + `    <section class="section section--soft" id="strategies">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="kicker">Purchase Reason Strategy</span>
          <h2>구매 이유를 만드는 3가지 방식</h2>
          <p class="section-desc">
            구매 이유는 브랜드가 말하고 싶은 장점이 아니라,<br>
            소비자가 실제로 비교하고 망설이고 선택하는 언어에서 발견됩니다.
          </p>
        </div>
        <div class="reason-lab reveal" aria-label="구매 이유 형성 대표 전략">
          <div class="reason-board">
            <div class="reason-board__head">
              <span>Consumer Voice</span>
              <strong>리뷰, 서베이, 검색에서 선택의 단서를 찾습니다.</strong>
            </div>
            <div class="voice-stream">
              <article class="voice-card">
                <span>Review</span>
                <p>“좋긴 한데, 다른 제품과 뭐가 다른지 모르겠어요.”</p>
              </article>
              <article class="voice-card">
                <span>Survey</span>
                <p>구매 전 가장 크게 확인하는 기준은 가격보다 사용 확신입니다.</p>
              </article>
              <article class="voice-card">
                <span>Search</span>
                <p>소비자는 제품명보다 상황, 문제, 비교 키워드로 탐색합니다.</p>
              </article>
            </div>
            <div class="reason-output">
              <span>OOH Message Reason</span>
              <strong>지금 이 브랜드를 선택해야 하는 이유</strong>
              <p>소비자의 언어를 구매 고려 순간에 떠오르는 한 문장과 접점 전략으로 바꿉니다.</p>
            </div>
          </div>
          <div class="reason-steps">
            <button class="reason-step" type="button" data-modal-target="awareness">
              <span>01 Reason Discovery</span>
              <strong>선택 이유 발굴</strong>
              <p>리뷰와 서베이에서 소비자가 실제로 중요하게 여기는 구매 동기를 찾습니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="reason-step" type="button" data-modal-target="momentum">
              <span>02 Barrier Control</span>
              <strong>구매 장벽 해소</strong>
              <p>가격, 신뢰, 사용 확신처럼 선택을 막는 장벽을 메시지 과제로 전환합니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="reason-step" type="button" data-modal-target="category">
              <span>03 Moment Placement</span>
              <strong>고려 순간 접점 설계</strong>
              <p>구매 이유가 떠올라야 하는 생활 동선과 리테일 주변 접점을 설계합니다.</p>
              <em>자세히 보기</em>
            </button>
          </div>
        </div>
      </div>
    </section>

` + s.slice(strategyEnd);

replaceText('브랜드가 기억되어야 할 의미를 OOH 전략으로 다시 씁니다.', '브랜드의 장점을 소비자의 구매 이유로 다시 씁니다.');
replaceText(
  `애드타입은 포지셔닝 메시지를 단순 노출 문구로만 보지 않습니다.<br>
            소비자가 카테고리를 이해하는 언어와 경쟁 브랜드의 기억 구조를 읽고,
            브랜드가 공략해야 할 인식과 공간 맥락을 함께 설계합니다.`,
  `애드타입은 제품 장점을 그대로 외치지 않습니다.<br>
            소비자가 실제로 고민하는 문제, 비교 기준, 구매 장벽을 읽고
            OOH가 해결해야 할 메시지와 접점 과제로 바꿉니다.`
);
replaceText('우리 브랜드를 이런 이미지로 기억시키고 싶다', '우리 제품의 장점을 더 잘 알리고 싶다');
replaceText('소비자는 이 카테고리를 어떤 언어로 이해하는가', '소비자는 무엇을 기준으로 선택을 고민하는가');
replaceText('이미지가 강화될 공간과 메시지를 설계한다', '구매 이유가 떠오를 메시지와 접점을 설계한다');
replaceText('브랜드사가 가진 목표는 대개 프리미엄, 신뢰, 취향, 전문성 같은 이미지 언어로 시작됩니다.', '브랜드사가 가진 목표는 대개 제품력, 혜택, 차별점 같은 공급자 언어로 시작됩니다.');
replaceText('검색, 리뷰, 서베이, 경쟁 맥락을 기준으로 브랜드가 공략해야 할 기억 구조를 좁힙니다.', '리뷰, 서베이, 검색 맥락을 기준으로 소비자가 실제로 비교하고 망설이는 기준을 좁힙니다.');
replaceText('브랜드 이미지에 어울리는 생활권, 매체 맥락, 크리에이티브를 연결해 포지셔닝이 작동할 구조를 만듭니다.', '구매 이유가 필요한 순간과 공간을 찾아 메시지, 매체, 리테일 접점을 연결합니다.');

replaceText('브랜드가 공략할 인식과 공간 맥락을 찾습니다.', '구매 동기와 장벽을 소비자 언어로 읽습니다.');
replaceText(
  `검색 키워드, 리뷰, 서베이, 경쟁 브랜드의 맥락과 생활권 데이터를 함께 봅니다.
              브랜드가 원하는 이미지로 기억되기 위해 어떤 소비자 맥락과 공간에 놓여야 하는지 찾습니다.`,
  `리뷰, 서베이, 검색 데이터를 함께 보며 소비자가 어떤 이유로 관심을 갖고,
              어떤 지점에서 망설이며, 어떤 순간에 선택을 결심하는지 분석합니다.`
);
replaceText(
  `<li><b>01</b>검색어와 카테고리 언어</li>
              <li><b>02</b>리뷰·서베이 기반 소비자 인식</li>
              <li><b>03</b>경쟁 브랜드 기억 구조</li>
              <li><b>04</b>브랜드 이미지에 맞는 공간·매체 맥락</li>`,
  `<li><b>01</b>리뷰/VOC 기반 구매 동기</li>
              <li><b>02</b>서베이 기반 고려도와 장벽</li>
              <li><b>03</b>검색어 기반 비교 기준</li>
              <li><b>04</b>구매 고려 순간의 공간 접점</li>`
);
replaceText('./assets/mental-market-clip.mp4', './assets/survey-review-radar.mp4');
replaceText('./assets/adtype-map-simulator.mp4', './assets/survey-review-radar.mp4');

replaceText('브랜드 이미지를 캠페인 구조로 설계합니다.', '구매 이유를 메시지와 접점 루프로 연결합니다.');
replaceText(
  `이미지 강화, 경쟁 대비 차별화, 프리미엄·신뢰감 형성 중 어떤 전략이 필요한지 정의하고,
            그에 맞는 생활권·매체·크리에이티브 구조를 설계합니다.`,
  `선택 이유 발굴, 구매 장벽 해소, 고려 순간 접점 설계 중 어떤 전략이 필요한지 정의하고,
            메시지와 매체 조합이 구매 고려 신호로 이어지는지 확인합니다.`
);
replaceText('인식·경쟁 진단', '구매 동기 진단');
replaceText('소비자가 브랜드와 카테고리를 이해하는 언어와 경쟁 맥락을 읽습니다.', '소비자가 실제로 말하는 만족 포인트와 망설임의 이유를 읽습니다.');
replaceText('포지셔닝 전략 선택', '구매 이유 선택');
replaceText('이미지 강화, 차별화, 신뢰감 중 우선 과제를 정합니다.', '선택 이유, 구매 장벽, 고려 순간 중 우선 과제를 정합니다.');
replaceText('맥락·매체 설계', '메시지·접점 설계');
replaceText('브랜드 이미지에 맞는 생활권, 상징 매체, 메시지 톤을 조합합니다.', '구매 이유가 가장 잘 작동할 생활 동선, 리테일 주변, 메시지 톤을 조합합니다.');
replaceText('성과 루프 구축', '고려 신호 확인');
replaceText('인식 변화, 검색 맥락, 상기도, 고려도 변화를 다음 캠페인 판단으로 연결합니다.', '검색량, 고려도, 방문 신호, 리뷰 반응을 다음 캠페인 판단으로 연결합니다.');

replaceText('포지셔닝이 실제 공간에서 각인되도록 실행합니다.', '선택 이유가 필요한 순간에 보이도록 실행합니다.');
replaceText(
  `애드타입은 분석과 제안에서 끝나지 않습니다.
            매체 검토, 배열, 소재 적용, 일정 관리까지 연결해 캠페인이 실제 공간에서 작동하도록 만듭니다.`,
  `구매 이유는 메시지로만 완성되지 않습니다.
            소비자가 비교하고, 이동하고, 구매를 고려하는 실제 공간에 맞춰 소재와 매체를 배치합니다.`
);

replaceText('노출 이후 인식이 어떻게 달라졌는지 봅니다.', '구매 이유가 고려 신호로 이어졌는지 봅니다.');
replaceText(
  `브랜드 포지셔닝 캠페인은 얼마나 많이 보였는지만으로 판단하지 않습니다.
            소비자가 브랜드를 어떤 언어와 이미지로 기억하는지, 경쟁 브랜드 대비 인식이 달라졌는지 함께 확인합니다.`,
  `구매 이유 형성 캠페인은 노출량만으로 판단하지 않습니다.
            검색량, 고려도, 방문 신호, 메시지 반응을 함께 보며 다음 캠페인에서 어떤 이유를 더 강화해야 하는지 찾습니다.`
);

const modalStart = s.indexOf('    <div class="modal" data-modal="awareness"');
const modalEnd = s.indexOf('  </div>\n\n  <script>', modalStart);
if (modalStart < 0 || modalEnd < 0) throw new Error('modal block not found');
s = s.slice(0, modalStart) + `    <div class="modal" data-modal="awareness" role="dialog" aria-modal="true" aria-labelledby="modal-awareness-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">01 Reason Discovery</span>
          <h3 class="modal__title" id="modal-awareness-title">선택 이유 발굴</h3>
          <p class="modal__lead">
            브랜드가 말하고 싶은 장점이 아니라, 소비자가 실제로 중요하게 여기는 구매 이유를 찾습니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>인지도는 있지만 구매 고려로 이어지지 않는 경우</li>
                <li>제품 장점이 소비자 언어로 정리되지 않은 경우</li>
                <li>리뷰 속 만족 포인트를 캠페인 메시지로 활용하고 싶은 경우</li>
                <li>경쟁 제품과 비교했을 때 선택 이유가 약한 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                리뷰, 서베이, 검색 맥락을 분석해 소비자가 실제로 반응하는 구매 동기를 찾습니다.
                이후 이를 OOH에서 이해 가능한 짧은 메시지와 반복 접점 구조로 변환합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">구매 동기</span>
                <span class="modal__chip">고려도</span>
                <span class="modal__chip">검색량</span>
                <span class="modal__chip">메시지 반응</span>
              </div>
            </div>
          </div>
          <div class="modal__actions">
            <a class="btn btn--ad" href="#contact" data-modal-close>이 전략으로 상담하기</a>
            <a class="btn" href="./assets/adtype-company-profile.pdf" download>회사소개서 보기</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" data-modal="momentum" role="dialog" aria-modal="true" aria-labelledby="modal-momentum-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">02 Barrier Control</span>
          <h3 class="modal__title" id="modal-momentum-title">구매 장벽 해소</h3>
          <p class="modal__lead">
            소비자가 알고도 선택하지 않는 이유를 찾아, OOH 캠페인이 풀어야 할 메시지 과제로 바꿉니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>가격, 신뢰, 사용 확신이 구매를 막는 경우</li>
                <li>리뷰나 VOC에 반복되는 불안 요인이 있는 경우</li>
                <li>제품은 좋지만 첫 구매 진입 장벽이 높은 경우</li>
                <li>고려 단계에서 경쟁 브랜드로 이탈하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                소비자의 망설임을 데이터로 분류하고, 장벽을 낮추는 메시지와 매체 맥락을 설계합니다.
                구매 직전 생활권, 리테일 주변, 반복 노출 접점을 함께 검토합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">구매 장벽</span>
                <span class="modal__chip">사용 확신</span>
                <span class="modal__chip">리테일 접점</span>
                <span class="modal__chip">방문 신호</span>
              </div>
            </div>
          </div>
          <div class="modal__actions">
            <a class="btn btn--ad" href="#contact" data-modal-close>이 전략으로 상담하기</a>
            <a class="btn" href="./assets/adtype-company-profile.pdf" download>회사소개서 보기</a>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" data-modal="category" role="dialog" aria-modal="true" aria-labelledby="modal-category-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">03 Moment Placement</span>
          <h3 class="modal__title" id="modal-category-title">고려 순간 접점 설계</h3>
          <p class="modal__lead">
            구매 이유가 필요한 순간에 브랜드가 떠오르도록 생활 동선과 매체 접점을 연결합니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>구매 직전 순간에 브랜드 상기가 약한 경우</li>
                <li>매장, 앱, 자사몰, 리테일 유입을 함께 만들고 싶은 경우</li>
                <li>특정 상권이나 생활권에서 구매 고려를 높여야 하는 경우</li>
                <li>검색 유도형 메시지와 오프라인 접점을 연결해야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                타겟이 비교하고 구매를 고민하는 시간대, 동선, 리테일 접점을 분석합니다.
                그리고 그 순간에 구매 이유가 반복 노출되도록 매체 조합과 메시지를 배치합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">상기도</span>
                <span class="modal__chip">검색 유입</span>
                <span class="modal__chip">매장 방문</span>
                <span class="modal__chip">구매 고려도</span>
              </div>
            </div>
          </div>
          <div class="modal__actions">
            <a class="btn btn--ad" href="#contact" data-modal-close>이 전략으로 상담하기</a>
            <a class="btn" href="./assets/adtype-company-profile.pdf" download>회사소개서 보기</a>
          </div>
        </div>
      </div>
    </div>

` + s.slice(modalEnd);

fs.writeFileSync(file, s, 'utf8');
