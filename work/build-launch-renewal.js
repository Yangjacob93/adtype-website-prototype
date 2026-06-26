const fs = require('fs');

const file = 'C:/Users/user/Documents/Codex/2026-06-25/dl/outputs/adtype-brand-launch-renewal.html';
let s = fs.readFileSync(file, 'utf8');

function replaceText(from, to) {
  if (!s.includes(from)) console.warn('missing:', from.slice(0, 90));
  s = s.split(from).join(to);
}

s = s.replace(/adtype-reason/g, 'adtype-launch');
replaceText('구매 이유 형성 | Adtype', '신제품·리뉴얼 인식 전환 | Adtype');
replaceText('브랜드 과제 03 · 구매 이유 형성', '브랜드 과제 04 · 신제품·리뉴얼 인식 전환');
replaceText('소비자가 브랜드를 선택해야 할 이유를 설계합니다.', '새로워진 브랜드의 차이를 빠르게 이해시킵니다.');
replaceText(
  `인지된 브랜드가 실제 고려와 선택으로 이어지도록
          리뷰, 서베이, 검색 맥락에서 구매 이유를 찾고 OOH 메시지와 접점 전략으로 바꿉니다.`,
  `신제품 출시와 리뉴얼의 핵심 변화를 소비자가 이해해야 할 순간과 공간에 배치해
          초기 인식, 검색, 체험, 구매 고려 신호를 만듭니다.`
);

replaceText('인지도는 구매 이유가 되지 않습니다.', '새로움은 설명되지 않으면 인식되지 않습니다.');
replaceText(
  `소비자가 브랜드를 알고 있어도 왜 선택해야 하는지 이해하지 못하면 구매 고려로 이어지지 않습니다.<br>
            제품의 장점, 리뷰 속 만족 포인트, 사용 맥락과 구매 장벽을 소비자 언어로 다시 읽어야 합니다.`,
  `신제품을 출시하거나 브랜드를 리뉴얼해도 소비자가 무엇이 달라졌는지 이해하지 못하면 변화는 시장에 남지 않습니다.<br>
            출시 초기에 누구에게, 어떤 차이를, 어느 생활권에서 먼저 각인시킬지 설계해야 합니다.`
);
replaceText('소비자는 어떤 이유로 구매를 망설이고 있는가?', '이번 출시와 리뉴얼에서 소비자가 반드시 이해해야 할 변화는 무엇인가?');
replaceText('우리 제품의 장점은 소비자 언어로 설득되고 있는가?', '초기 확산이 필요한 타겟과 생활권은 어디인가?');
replaceText('구매를 고려하는 순간에 어떤 메시지가 떠올라야 하는가?', '출시 이후 검색, 방문, 고려 신호가 실제로 만들어지고 있는가?');

const strategyStart = s.indexOf('<section class="section section--soft" id="strategies">');
const strategyEnd = s.indexOf('    <section class="section">', strategyStart);
if (strategyStart < 0 || strategyEnd < 0) throw new Error('strategy section not found');
s = s.slice(0, strategyStart) + `    <section class="section section--soft" id="strategies">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="kicker">Launch Shift Strategy</span>
          <h2>신제품과 리뉴얼을 각인시키는 3가지 방식</h2>
          <p class="section-desc">
            런칭 캠페인의 핵심은 많이 알리는 것보다,<br>
            무엇이 달라졌고 왜 지금 주목해야 하는지를 빠르게 이해시키는 것입니다.
          </p>
        </div>
        <div class="launch-lab reveal" aria-label="신제품·리뉴얼 인식 전환 대표 전략">
          <div class="launch-stage">
            <div class="launch-stage__track">
              <article class="launch-moment launch-moment--before">
                <span>Before</span>
                <strong>기존 인식</strong>
                <p>소비자가 이미 알고 있던 브랜드 이미지와 카테고리 기억</p>
              </article>
              <article class="launch-moment launch-moment--shift">
                <span>Shift</span>
                <strong>새로워진 차이</strong>
                <p>신제품, 리뉴얼, 신규 라인업이 시장에 제시하는 변화</p>
              </article>
              <article class="launch-moment launch-moment--after">
                <span>After</span>
                <strong>초기 각인</strong>
                <p>출시 초기에 만들어야 할 검색, 체험, 구매 고려 신호</p>
              </article>
            </div>
            <div class="launch-visual">
              <span>OOH Launch Conversion</span>
              <strong>무엇이 달라졌는지<br>생활권 안에서 반복적으로 이해시킵니다.</strong>
            </div>
          </div>
          <div class="launch-steps">
            <button class="launch-step" type="button" data-modal-target="awareness">
              <span>01 Difference Encoding</span>
              <strong>신제품 차별점 각인</strong>
              <p>신제품의 USP와 사용 맥락을 소비자가 이해할 수 있는 메시지로 바꿉니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="launch-step" type="button" data-modal-target="momentum">
              <span>02 Renewal Shift</span>
              <strong>리뉴얼 변화 인식</strong>
              <p>기존 브랜드 인식 위에 무엇이 좋아지고 달라졌는지를 선명하게 쌓습니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="launch-step" type="button" data-modal-target="category">
              <span>03 Launch Spread</span>
              <strong>출시 초기 확산 설계</strong>
              <p>초기 반응이 필요한 타겟과 생활권에 접점 밀도를 집중합니다.</p>
              <em>자세히 보기</em>
            </button>
          </div>
        </div>
      </div>
    </section>

` + s.slice(strategyEnd);

replaceText('브랜드의 장점을 소비자의 구매 이유로 다시 씁니다.', '출시와 리뉴얼의 변화를 캠페인 과제로 다시 씁니다.');
replaceText(
  `애드타입은 제품 장점을 그대로 외치지 않습니다.<br>
            소비자가 실제로 고민하는 문제, 비교 기준, 구매 장벽을 읽고
            OOH가 해결해야 할 메시지와 접점 과제로 바꿉니다.`,
  `애드타입은 신제품 소식을 단순 고지로만 보지 않습니다.<br>
            소비자가 이해해야 할 차이, 초기 확산이 필요한 타겟, 출시 후 만들어야 할 행동 신호를
            OOH 캠페인 과제로 바꿉니다.`
);
replaceText('우리 제품의 장점을 더 잘 알리고 싶다', '신제품과 리뉴얼의 차이를 빠르게 알리고 싶다');
replaceText('소비자는 무엇을 기준으로 선택을 고민하는가', '소비자는 무엇이 달라졌다고 이해해야 하는가');
replaceText('구매 이유가 떠오를 메시지와 접점을 설계한다', '초기 각인이 일어날 메시지와 접점을 설계한다');
replaceText('브랜드사가 가진 목표는 대개 제품력, 혜택, 차별점 같은 공급자 언어로 시작됩니다.', '브랜드사의 목표는 대개 출시, 리뉴얼, 신규 라인업, 새로운 기능 같은 내부 변화 언어로 시작됩니다.');
replaceText('리뷰, 서베이, 검색 맥락을 기준으로 소비자가 실제로 비교하고 망설이는 기준을 좁힙니다.', '소비자 인식, 검색 맥락, 사용 상황을 기준으로 어떤 변화가 먼저 이해되어야 하는지 좁힙니다.');
replaceText('구매 이유가 필요한 순간과 공간을 찾아 메시지, 매체, 리테일 접점을 연결합니다.', '출시 초기에 반복 각인이 필요한 생활권과 매체를 찾아 메시지, 소재, 접점 밀도를 연결합니다.');

replaceText('구매 동기와 장벽을 소비자 언어로 읽습니다.', '출시 초기에 각인되어야 할 차이를 데이터로 읽습니다.');
replaceText(
  `리뷰, 서베이, 검색 데이터를 함께 보며 소비자가 어떤 이유로 관심을 갖고,
              어떤 지점에서 망설이며, 어떤 순간에 선택을 결심하는지 분석합니다.`,
  `시장 검색 맥락, 소비자 인식, 기존 브랜드 이미지와 초기 확산 생활권을 함께 봅니다.
              무엇을 먼저 이해시켜야 하고, 어디에서 반복적으로 보여야 하는지 판단합니다.`
);
replaceText(
  `<li><b>01</b>리뷰/VOC 기반 구매 동기</li>
              <li><b>02</b>서베이 기반 고려도와 장벽</li>
              <li><b>03</b>검색어 기반 비교 기준</li>
              <li><b>04</b>구매 고려 순간의 공간 접점</li>`,
  `<li><b>01</b>출시 타겟과 초기 확산 생활권</li>
              <li><b>02</b>신제품 USP와 소비자 이해 언어</li>
              <li><b>03</b>리뉴얼 전후 인식 변화</li>
              <li><b>04</b>검색량, 체험, 구매 고려 신호</li>`
);
replaceText('./assets/survey-review-radar.mp4', './assets/hongdae-sync-creative.mp4');

replaceText('구매 이유를 메시지와 접점 루프로 연결합니다.', '런칭 메시지를 초기 확산 루프로 연결합니다.');
replaceText(
  `선택 이유 발굴, 구매 장벽 해소, 고려 순간 접점 설계 중 어떤 전략이 필요한지 정의하고,
            메시지와 매체 조합이 구매 고려 신호로 이어지는지 확인합니다.`,
  `차별점 각인, 리뉴얼 변화 인식, 출시 초기 확산 중 어떤 전략이 필요한지 정의하고,
            메시지와 매체 조합이 출시 후 행동 신호로 이어지는지 확인합니다.`
);
replaceText('구매 동기 진단', '변화 포인트 진단');
replaceText('소비자가 실제로 말하는 만족 포인트와 망설임의 이유를 읽습니다.', '소비자가 이해해야 할 신제품 차별점과 리뉴얼 변화를 읽습니다.');
replaceText('구매 이유 선택', '런칭 전략 선택');
replaceText('선택 이유, 구매 장벽, 고려 순간 중 우선 과제를 정합니다.', '차별점 각인, 변화 인식, 초기 확산 중 우선 과제를 정합니다.');
replaceText('메시지·접점 설계', '출시 접점 설계');
replaceText('구매 이유가 가장 잘 작동할 생활 동선, 리테일 주변, 메시지 톤을 조합합니다.', '출시 초기에 반복 노출이 필요한 생활권, 매체, 메시지 톤을 조합합니다.');
replaceText('고려 신호 확인', '초기 반응 확인');
replaceText('검색량, 고려도, 방문 신호, 리뷰 반응을 다음 캠페인 판단으로 연결합니다.', '검색량, 체험, 방문, 구매 고려 신호를 다음 캠페인 판단으로 연결합니다.');

replaceText('선택 이유가 필요한 순간에 보이도록 실행합니다.', '새로워진 차이가 실제 공간에서 보이도록 실행합니다.');
replaceText(
  `구매 이유는 메시지로만 완성되지 않습니다.
            소비자가 비교하고, 이동하고, 구매를 고려하는 실제 공간에 맞춰 소재와 매체를 배치합니다.`,
  `출시와 리뉴얼은 첫 인식의 밀도가 중요합니다.
            타겟이 이동하고 체류하는 공간에서 새로움이 반복적으로 보이도록 소재와 매체를 배치합니다.`
);

replaceText('구매 이유가 고려 신호로 이어졌는지 봅니다.', '출시 메시지가 초기 반응으로 이어졌는지 봅니다.');
replaceText(
  `구매 이유 형성 캠페인은 노출량만으로 판단하지 않습니다.
            검색량, 고려도, 방문 신호, 메시지 반응을 함께 보며 다음 캠페인에서 어떤 이유를 더 강화해야 하는지 찾습니다.`,
  `신제품·리뉴얼 캠페인은 노출량만으로 판단하지 않습니다.
            검색량, 체험, 매장 방문, 구매 고려, 메시지 반응을 함께 보며 다음 확산 전략을 찾습니다.`
);

const modalStart = s.indexOf('    <div class="modal" data-modal="awareness"');
const modalEnd = s.indexOf('  </div>\n\n  <script>', modalStart);
if (modalStart < 0 || modalEnd < 0) throw new Error('modal block not found');
s = s.slice(0, modalStart) + `    <div class="modal" data-modal="awareness" role="dialog" aria-modal="true" aria-labelledby="modal-awareness-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">01 Difference Encoding</span>
          <h3 class="modal__title" id="modal-awareness-title">신제품 차별점 각인</h3>
          <p class="modal__lead">
            신제품의 차이를 소비자가 이해할 수 있는 한 문장과 반복 접점으로 바꿉니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>신제품의 차이를 빠르게 알려야 하는 경우</li>
                <li>기능이나 성분은 좋아졌지만 소비자 언어로 정리되지 않은 경우</li>
                <li>출시 초기에 검색량과 구매 고려 신호를 만들어야 하는 경우</li>
                <li>기존 브랜드 이미지 안에서 신규 라인업을 확장해야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                신제품의 USP, 사용 맥락, 타겟 생활권을 함께 분석합니다.
                이후 출시 초기 가장 먼저 이해되어야 할 메시지를 OOH 접점에 반복 배치합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">USP 각인</span>
                <span class="modal__chip">검색량</span>
                <span class="modal__chip">상기도</span>
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

    <div class="modal" data-modal="momentum" role="dialog" aria-modal="true" aria-labelledby="modal-momentum-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">02 Renewal Shift</span>
          <h3 class="modal__title" id="modal-momentum-title">리뉴얼 변화 인식</h3>
          <p class="modal__lead">
            소비자가 이미 알고 있는 브랜드 위에 무엇이 달라졌는지 선명하게 쌓습니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>리뉴얼했지만 소비자가 차이를 느끼지 못하는 경우</li>
                <li>패키지, 성분, 컨셉, 라인업 변화가 시장에 충분히 전달되지 않은 경우</li>
                <li>기존 브랜드 이미지를 유지하면서 새로움을 더해야 하는 경우</li>
                <li>리뉴얼 이후 검색, 체험, 구매 고려 신호를 만들어야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                기존 인식과 달라진 점 사이의 간극을 분석하고, 변화가 가장 잘 이해될 메시지와 공간을 설계합니다.
                소비자가 이미 알고 있던 브랜드 기억 위에 새 의미를 덧입힙니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">변화 인식</span>
                <span class="modal__chip">리뉴얼 상기도</span>
                <span class="modal__chip">브랜드 지표</span>
                <span class="modal__chip">검색 반응</span>
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
          <span class="modal__eyebrow">03 Launch Spread</span>
          <h3 class="modal__title" id="modal-category-title">출시 초기 확산 설계</h3>
          <p class="modal__lead">
            출시 초기에 반응이 필요한 타겟과 생활권에 접점 밀도를 집중합니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>런칭 초기에 시장 인지와 검색량을 빠르게 만들어야 하는 경우</li>
                <li>핵심 타겟이 밀집한 지역과 생활권부터 침투해야 하는 경우</li>
                <li>체험, 방문, 리테일 구매 고려를 함께 만들고 싶은 경우</li>
                <li>초기 반응을 보고 다음 확산 지역을 결정해야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                출시 초기 타겟의 생활권과 이동 동선을 분석하고, 반응을 만들 수 있는 매체 조합을 설계합니다.
                캠페인 이후 검색량, 방문, 고려 신호를 확인해 다음 확산 전략으로 연결합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">초기 검색량</span>
                <span class="modal__chip">체험/방문 신호</span>
                <span class="modal__chip">지역별 반응</span>
                <span class="modal__chip">확산 지역</span>
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
