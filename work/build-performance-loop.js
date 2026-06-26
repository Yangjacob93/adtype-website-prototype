const fs = require('fs');

const source = 'C:/Users/user/Documents/Codex/2026-06-25/dl/outputs/adtype-brand-offline-traffic.html';
const target = 'C:/Users/user/Documents/Codex/2026-06-25/dl/outputs/adtype-brand-performance-loop.html';
let s = fs.readFileSync(source, 'utf8');

function replaceBlock(startNeedle, endNeedle, next) {
  const start = s.indexOf(startNeedle);
  if (start < 0) throw new Error(`start not found: ${startNeedle}`);
  const end = s.indexOf(endNeedle, start);
  if (end < 0) throw new Error(`end not found: ${endNeedle}`);
  s = s.slice(0, start) + next + s.slice(end);
}

function replaceText(from, to) {
  if (!s.includes(from)) throw new Error(`missing text: ${from.slice(0, 80)}`);
  s = s.split(from).join(to);
}

s = s.replace(/adtype-traffic/g, 'adtype-performance');
replaceText('오프라인 접점 기반 유입 확대 | Adtype', '브랜드 지표 개선과 캠페인 고도화 | Adtype');
replaceText('브랜드 과제 05 · 오프라인 접점 기반 유입 확대', '브랜드 과제 06 · 브랜드 지표 개선과 캠페인 고도화');
replaceText('오프라인 접점을<br>행동 신호로 연결합니다.', '성과를 읽고<br>다음 성장 전략으로 연결합니다.');
replaceText(
  '타겟의 생활 동선과 구매 접점을 연결해 검색, 방문, 앱, 자사몰, 리테일 유입으로 이어지는 OOH 캠페인을 설계합니다.',
  '캠페인 결과를 단순 리포트로 끝내지 않고, 브랜드 지표와 지역·타겟·매체별 반응을 분석해 다음 캠페인의 성장 인사이트로 연결합니다.'
);
replaceText('노출은 행동으로 연결될 때 더 강해집니다.', '캠페인은 끝난 뒤에 더 중요한 질문을 남깁니다.');
replaceText(
  `OOH가 단순 브랜딩 채널로 끝나지 않으려면 타겟이 이동하고 머무르고 구매를 고민하는 접점과 연결되어야 합니다.<br>
            검색, 방문, 앱 실행, 매장 유입 같은 행동 신호를 만들 수 있도록 생활권과 전환 접점을 함께 설계해야 합니다.`,
  `OOH 캠페인의 결과는 노출량과 집행 리포트만으로 설명되기 어렵습니다.<br>
            브랜드 인지도, 상기도, 고려도, 검색량, 지역별 반응이 어떻게 움직였는지 읽어야 다음 캠페인의 판단 기준이 생깁니다.`
);
replaceText('타겟은 어디에서 검색하고 방문을 결심하는가?', '이번 캠페인은 브랜드 지표를 실제로 움직였는가?');
replaceText('매장, 앱, 자사몰, 리테일 접점과 어떤 생활 동선을 연결해야 하는가?', '어떤 타겟, 지역, 메시지, 매체 조합이 더 강하게 반응했는가?');
replaceText('캠페인 이후 어떤 행동 신호를 성과로 확인할 것인가?', '다음 캠페인에서 무엇을 유지하고 무엇을 바꿔야 하는가?');

const performanceCss = `
    #adtype-performance .performance-lab {
      display: grid !important;
      grid-template-columns: 1.08fr .92fr !important;
      gap: 28px !important;
      align-items: stretch !important;
    }

    #adtype-performance .insight-dashboard {
      position: relative !important;
      min-height: 650px !important;
      padding: 34px !important;
      overflow: hidden !important;
      border-radius: 34px !important;
      border: 1px solid rgba(23, 23, 25, .08) !important;
      background: #111214 !important;
      box-shadow: 0 30px 90px rgba(15, 23, 42, .14) !important;
      color: #fff !important;
    }

    #adtype-performance .insight-dashboard::before {
      content: "" !important;
      position: absolute !important;
      inset: 0 !important;
      background:
        radial-gradient(circle at 22% 16%, rgba(235, 66, 0, .28), transparent 30%),
        radial-gradient(circle at 82% 74%, rgba(0, 163, 108, .16), transparent 32%) !important;
      pointer-events: none !important;
    }

    #adtype-performance .dashboard-top,
    #adtype-performance .dashboard-chart,
    #adtype-performance .dashboard-grid,
    #adtype-performance .insight-note {
      position: relative !important;
      z-index: 1 !important;
    }

    #adtype-performance .dashboard-top {
      display: flex !important;
      justify-content: space-between !important;
      align-items: flex-start !important;
      gap: 18px !important;
      margin-bottom: 34px !important;
    }

    #adtype-performance .dashboard-top span {
      display: block !important;
      color: var(--ad) !important;
      font-size: 13px !important;
      line-height: 1.2 !important;
      font-weight: 850 !important;
      margin-bottom: 12px !important;
    }

    #adtype-performance .dashboard-top strong {
      display: block !important;
      color: #fff !important;
      font-size: 30px !important;
      line-height: 1.25 !important;
      font-weight: 760 !important;
    }

    #adtype-performance .dashboard-period {
      flex: 0 0 auto !important;
      padding: 12px 14px !important;
      border-radius: 999px !important;
      background: rgba(255, 255, 255, .08) !important;
      color: rgba(255, 255, 255, .72) !important;
      font-size: 13px !important;
      line-height: 1 !important;
      font-weight: 750 !important;
    }

    #adtype-performance .dashboard-chart {
      height: 230px !important;
      padding: 26px 24px !important;
      border-radius: 26px !important;
      background:
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px),
        rgba(255, 255, 255, .06) !important;
      background-size: 48px 46px !important;
      border: 1px solid rgba(255, 255, 255, .09) !important;
    }

    #adtype-performance .chart-line {
      position: absolute !important;
      left: 28px !important;
      right: 28px !important;
      bottom: 42px !important;
      height: 96px !important;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0 !important;
      border-top: 4px solid var(--ad) !important;
      transform: rotate(-4deg) !important;
      opacity: .95 !important;
    }

    #adtype-performance .chart-line--sub {
      bottom: 76px !important;
      border-top-color: #28d19c !important;
      transform: rotate(6deg) !important;
      opacity: .72 !important;
    }

    #adtype-performance .chart-pin {
      position: absolute !important;
      width: 14px !important;
      height: 14px !important;
      border-radius: 50% !important;
      background: #fff !important;
      border: 4px solid var(--ad) !important;
      box-shadow: 0 0 0 8px rgba(235, 66, 0, .14) !important;
    }

    #adtype-performance .chart-pin--one { left: 24% !important; bottom: 94px !important; }
    #adtype-performance .chart-pin--two { right: 21% !important; bottom: 128px !important; }

    #adtype-performance .dashboard-grid {
      display: grid !important;
      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
      gap: 12px !important;
      margin-top: 14px !important;
    }

    #adtype-performance .dashboard-metric {
      padding: 20px !important;
      border-radius: 22px !important;
      background: rgba(255, 255, 255, .08) !important;
      border: 1px solid rgba(255, 255, 255, .08) !important;
    }

    #adtype-performance .dashboard-metric b {
      display: block !important;
      color: #fff !important;
      font-size: 30px !important;
      line-height: 1 !important;
      font-weight: 820 !important;
    }

    #adtype-performance .dashboard-metric small {
      display: block !important;
      margin-top: 10px !important;
      color: rgba(255, 255, 255, .56) !important;
      font-size: 12px !important;
      line-height: 1.35 !important;
      font-weight: 700 !important;
    }

    #adtype-performance .insight-note {
      margin-top: 14px !important;
      padding: 22px !important;
      border-radius: 22px !important;
      background: rgba(235, 66, 0, .12) !important;
      border: 1px solid rgba(235, 66, 0, .2) !important;
    }

    #adtype-performance .insight-note span {
      display: block !important;
      color: var(--ad) !important;
      font-size: 13px !important;
      line-height: 1.2 !important;
      font-weight: 850 !important;
      margin-bottom: 10px !important;
    }

    #adtype-performance .insight-note strong {
      display: block !important;
      color: #fff !important;
      font-size: 22px !important;
      line-height: 1.42 !important;
      font-weight: 740 !important;
    }

    #adtype-performance .performance-steps {
      display: grid !important;
      gap: 16px !important;
    }

    #adtype-performance .performance-step {
      width: 100% !important;
      min-height: 194px !important;
      padding: 28px !important;
      text-align: left !important;
      border: 1px solid rgba(23, 23, 25, .08) !important;
      border-radius: 28px !important;
      background: #fff !important;
      cursor: pointer !important;
      box-shadow: 0 18px 60px rgba(15, 23, 42, .05) !important;
      transition: transform .18s ease, border-color .18s ease, box-shadow .18s ease !important;
      font-family: inherit !important;
    }

    #adtype-performance .performance-step:hover {
      transform: translateY(-4px) !important;
      border-color: rgba(235, 66, 0, .3) !important;
      box-shadow: 0 26px 70px rgba(235, 66, 0, .09) !important;
    }

    #adtype-performance .performance-step span {
      display: block !important;
      color: var(--ad) !important;
      font-size: 13px !important;
      line-height: 1.2 !important;
      font-weight: 850 !important;
      margin-bottom: 18px !important;
    }

    #adtype-performance .performance-step strong {
      display: block !important;
      color: #171719 !important;
      font-size: 27px !important;
      line-height: 1.28 !important;
      font-weight: 740 !important;
      letter-spacing: 0 !important;
    }

    #adtype-performance .performance-step p {
      margin-top: 16px !important;
      color: #4e5968 !important;
      font-size: 16px !important;
      line-height: 1.62 !important;
      font-weight: 520 !important;
    }

    #adtype-performance .performance-step em {
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      margin-top: 22px !important;
      color: #171719 !important;
      font-size: 15px !important;
      font-style: normal !important;
      line-height: 1 !important;
      font-weight: 850 !important;
    }

    #adtype-performance .performance-step em::after {
      content: "→" !important;
    }

`;

s = s.replace('    #adtype-performance .translation {', performanceCss + '    #adtype-performance .translation {');

replaceBlock(
  '    <section class="section section--soft" id="strategies">',
  '    <section class="section">',
  `    <section class="section section--soft" id="strategies">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="kicker">Growth Insight Strategy</span>
          <h2>성과를 다음 전략으로 바꾸는 3가지 방식</h2>
          <p class="section-desc">
            캠페인의 성과는 숫자를 모으는 데서 끝나지 않습니다.<br>
            어떤 지표가 움직였고, 어떤 조합이 작동했으며, 다음 캠페인에서 무엇을 바꿔야 하는지까지 해석해야 합니다.
          </p>
        </div>

        <div class="performance-lab reveal" aria-label="브랜드 지표 개선과 캠페인 고도화 대표 전략">
          <div class="insight-dashboard">
            <div class="dashboard-top">
              <div>
                <span>Campaign Insight Dashboard</span>
                <strong>브랜드 지표와<br>성과 신호를 함께 읽습니다.</strong>
              </div>
              <div class="dashboard-period">Before / During / After</div>
            </div>
            <div class="dashboard-chart">
              <i class="chart-line"></i>
              <i class="chart-line chart-line--sub"></i>
              <i class="chart-pin chart-pin--one"></i>
              <i class="chart-pin chart-pin--two"></i>
            </div>
            <div class="dashboard-grid">
              <div class="dashboard-metric">
                <b>+18%</b>
                <small>Brand Recall</small>
              </div>
              <div class="dashboard-metric">
                <b>2.7x</b>
                <small>Search Lift</small>
              </div>
              <div class="dashboard-metric">
                <b>41%</b>
                <small>Target Reach</small>
              </div>
            </div>
            <div class="insight-note">
              <span>Next Growth Insight</span>
              <strong>성과가 좋았던 타겟, 지역, 매체 조합을 다음 캠페인의 설계 기준으로 남깁니다.</strong>
            </div>
          </div>

          <div class="performance-steps">
            <button class="performance-step" type="button" data-modal-target="brandmetric">
              <span>01 Brand Metric</span>
              <strong>브랜드 지표 변화 분석</strong>
              <p>인지도, 상기도, 고려도, 구매의향이 캠페인 전후로 어떻게 움직였는지 확인합니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="performance-step" type="button" data-modal-target="response">
              <span>02 Response Structure</span>
              <strong>성과 구조 해석</strong>
              <p>타겟, 지역, 시간대, 매체 조합별 반응 차이를 비교해 캠페인이 작동한 구조를 해석합니다.</p>
              <em>자세히 보기</em>
            </button>
            <button class="performance-step" type="button" data-modal-target="optimization">
              <span>03 Campaign Optimization</span>
              <strong>다음 캠페인 고도화</strong>
              <p>성과 분석을 다음 타겟, 지역, 메시지, 매체 조합 개선안으로 연결합니다.</p>
              <em>자세히 보기</em>
            </button>
          </div>
        </div>
      </div>
    </section>

`
);

replaceText('오프라인 노출을 행동 과제로 다시 씁니다.', '캠페인 결과를 성장 인사이트로 다시 씁니다.');
replaceText(
  `애드타입은 OOH를 단순 노출 채널로만 보지 않습니다.<br>
            타겟이 이동하는 생활권과 브랜드의 전환 접점을 연결해 검색, 방문, 앱, 자사몰 유입으로 이어질 수 있는 캠페인 구조를 설계합니다.`,
  `애드타입은 캠페인 결과를 집행 리포트로만 정리하지 않습니다.<br>
            노출, 도달, 빈도와 브랜드 지표, 검색량, 지역별 반응을 함께 읽고 다음 캠페인의 성장 판단으로 연결합니다.`
);
replaceText('캠페인이 실제 행동으로 이어져야 한다', '이번 캠페인이 브랜드를 움직였는지 알고 싶다');
replaceText('브랜드사의 목표는 매장 방문, 앱 설치, 자사몰 유입, 검색량 증가 같은 행동 신호로 시작됩니다.', '브랜드사의 질문은 노출량이 아니라 실제 인지도, 상기도, 고려도, 검색량 변화로 향합니다.');
replaceText('타겟은 어디서 행동을 결심하는가', '무엇이 움직였고 무엇이 움직이지 않았는가');
replaceText('생활권, 이동 동선, 리테일 접점, 검색 맥락을 기준으로 행동 가능성이 높은 순간을 찾습니다.', '캠페인 전후 지표, 지역별 반응, 타겟별 도달 구조를 비교해 성과의 원인을 찾습니다.');
replaceText('접점과 행동 경로를 연결한다', '다음 캠페인의 개선 기준을 만든다');
replaceText('OOH 메시지, 매체 위치, CTA, 리테일·앱·자사몰 경로를 하나의 행동 설계로 연결합니다.', '효과가 있었던 타겟, 지역, 메시지, 매체 조합을 다음 전략의 기준으로 재구성합니다.');
replaceText('생활 동선과 전환 접점을 함께 읽습니다.', '성과 데이터와 브랜드 지표를 함께 읽습니다.');
replaceText(
  `타겟의 거주·이동·체류 데이터, 매장·리테일 위치, 검색·방문 신호를 함께 봅니다.
              어디에서 노출되어야 행동 가능성이 높아지는지 판단합니다.`,
  `캠페인별 노출, 도달, 빈도뿐 아니라 브랜드 인지도, 상기도, 고려도, 검색량, 지역별 반응을 함께 봅니다.
              단일 지표가 아니라 여러 신호를 연결해 캠페인의 실제 의미를 판단합니다.`
);
replaceText('<li><b>01</b>타겟 생활권과 이동 동선</li>', '<li><b>01</b>캠페인 노출·도달·빈도 데이터</li>');
replaceText('<li><b>02</b>매장·리테일·POI 접점</li>', '<li><b>02</b>인지도·상기도·고려도 변화</li>');
replaceText('<li><b>03</b>검색·앱·자사몰 유입 경로</li>', '<li><b>03</b>검색량·직접 유입·지역별 반응</li>');
replaceText('<li><b>04</b>지역별 행동 신호와 반응</li>', '<li><b>04</b>타겟·지역·매체별 성과 차이</li>');
replaceText('<video src="./assets/media-planning-system.mp4" autoplay muted loop playsinline></video>', '<video src="./assets/ad-effect-clip.mp4" autoplay muted loop playsinline></video>');
replaceText('노출, 접점, 행동 신호를 하나의 루프로 연결합니다.', '성과, 인사이트, 다음 캠페인을 하나의 루프로 연결합니다.');
replaceText(
  `검색 유입, 방문 유도, 앱·자사몰 행동 전환 중 어떤 전략이 필요한지 정의하고,
            캠페인 이후 행동 신호를 다음 접점 설계로 연결합니다.`,
  `캠페인 결과를 확인하는 데서 끝내지 않고, 브랜드 지표와 성과 신호를 해석해 다음 캠페인의 타겟, 지역, 메시지, 매체 개선안으로 연결합니다.`
);
replaceText('행동 목표 정의', '성과 기준 정의');
replaceText('검색, 방문, 앱, 자사몰 중 우선 전환 목표를 정합니다.', '캠페인에서 움직여야 할 브랜드 지표와 성과 신호를 정합니다.');
replaceText('생활권·접점 매칭', '성과 데이터 통합');
replaceText('타겟 동선과 브랜드 전환 접점을 연결합니다.', '노출, 도달, 빈도, 검색량, 브랜드 지표 데이터를 함께 봅니다.');
replaceText('메시지·CTA 설계', '반응 구조 해석');
replaceText('행동을 유도할 메시지와 OOH 접점 구조를 만듭니다.', '타겟, 지역, 매체, 메시지별 성과 차이를 해석합니다.');
replaceText('행동 신호 분석', '다음 전략 고도화');
replaceText('지역별 검색, 방문, 유입 반응을 다음 캠페인으로 연결합니다.', '분석 결과를 다음 캠페인의 개선 기준으로 연결합니다.');
replaceText('행동이 일어날 접점 가까이에 배치합니다.', '성과를 읽을 수 있도록 캠페인을 운영합니다.');
replaceText(
  `OOH는 행동이 일어나는 생활 장면과 가까울수록 강해집니다.
            타겟이 지나가고, 머물고, 구매를 고민하는 공간에 맞춰 소재와 매체를 배치합니다.`,
  `좋은 성과 관리는 캠페인이 끝난 뒤에만 시작되지 않습니다.
            캠페인 설계 단계부터 측정 기준과 비교 구조를 함께 잡아야 다음 판단에 쓸 수 있는 인사이트가 남습니다.`
);
replaceText('이동 동선 안에서 검색과 방문을 유도하는 반복 접점을 만듭니다.', '캠페인 노출과 도달 구조를 기간별로 확인해 성과의 흐름을 읽습니다.');
replaceText('체류 공간과 리테일 접점 주변에서 행동 신호를 만듭니다.', '매체와 지역별 반응 차이를 비교해 다음 캠페인의 개선 포인트를 찾습니다.');
replaceText('노출 이후 어떤 행동 신호가 만들어졌는지 봅니다.', '성과가 다음 성장 전략으로 이어졌는지 봅니다.');
replaceText(
  `오프라인 접점 기반 유입 캠페인은 노출량만으로 판단하지 않습니다.
            검색량, 방문 신호, 앱·자사몰 유입, 지역별 반응을 함께 보며 다음 접점 설계를 개선합니다.`,
  `브랜드 지표 개선과 캠페인 고도화는 단순한 리포팅이 아닙니다.
            캠페인 결과를 브랜드 성장의 다음 판단으로 바꾸는 과정입니다.`
);
replaceText('검색량·직접 유입', '브랜드 지표 변화');
replaceText('브랜드명, 제품명, 캠페인 키워드 검색과 직접 유입 변화를 확인합니다.', '인지도, 상기도, 고려도, 구매의향 변화가 실제로 있었는지 확인합니다.');
replaceText('매장·지역 반응', '검색·유입 신호');
replaceText('상권, 매장, 지역 단위의 방문 가능 신호와 반응 차이를 분석합니다.', '브랜드 검색량, 직접 유입, 지역별 반응 변화를 캠페인 성과와 함께 봅니다.');
replaceText('앱·자사몰 유입', '타겟·지역·매체 차이');
replaceText('앱 실행, 설치, 자사몰 방문, 이벤트 참여 같은 행동 신호를 봅니다.', '어떤 타겟, 지역, 매체 조합에서 더 강한 반응이 있었는지 비교합니다.');
replaceText('다음 접점 개선안', '다음 캠페인 개선안');
replaceText('성과가 좋았던 지역, 매체, 메시지를 다음 캠페인 설계에 반영합니다.', '다음 캠페인에서 강화하거나 조정해야 할 타겟, 지역, 메시지, 매체를 제안합니다.');
replaceText('우리 브랜드의 오프라인 접점을 행동으로 연결해보세요.', '캠페인 결과를 다음 성장 전략으로 연결해보세요.');

replaceBlock(
  '    <div class="modal" data-modal="search"',
  '  </div>\n\n  <script>',
  `    <div class="modal" data-modal="brandmetric" role="dialog" aria-modal="true" aria-labelledby="modal-brandmetric-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">01 Brand Metric</span>
          <h3 class="modal__title" id="modal-brandmetric-title">브랜드 지표 변화 분석</h3>
          <p class="modal__lead">
            캠페인 전후 브랜드 인지도, 상기도, 고려도, 구매의향이 어떻게 움직였는지 확인합니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>이번 캠페인이 브랜드 지표를 실제로 움직였는지 확인해야 하는 경우</li>
                <li>인지도, 상기도, 고려도 중 어떤 지표가 개선됐는지 설명해야 하는 경우</li>
                <li>브랜드 캠페인의 성과를 내부 의사결정자에게 설득해야 하는 경우</li>
                <li>다음 캠페인에서 어떤 지표를 우선 개선할지 정해야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                캠페인 전후 브랜드 지표를 비교하고, 노출·도달·빈도 데이터와 함께 해석합니다.
                단순 지표 변화가 아니라 어떤 타겟과 접점에서 변화가 만들어졌는지 함께 봅니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">인지도</span>
                <span class="modal__chip">상기도</span>
                <span class="modal__chip">고려도</span>
                <span class="modal__chip">구매의향</span>
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

    <div class="modal" data-modal="response" role="dialog" aria-modal="true" aria-labelledby="modal-response-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">02 Response Structure</span>
          <h3 class="modal__title" id="modal-response-title">성과 구조 해석</h3>
          <p class="modal__lead">
            타겟, 지역, 시간대, 매체 조합별 반응 차이를 비교해 캠페인이 작동한 구조를 해석합니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>어떤 지역과 매체 조합이 효과적이었는지 알고 싶은 경우</li>
                <li>타겟별 도달 구조와 실제 반응 차이를 비교해야 하는 경우</li>
                <li>검색량, 직접 유입, 지역별 반응이 왜 달랐는지 설명해야 하는 경우</li>
                <li>성과가 좋은 조합과 그렇지 않은 조합을 구분해야 하는 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                캠페인 노출, 도달, 빈도 데이터를 기준으로 지역, 타겟, 매체, 메시지별 성과 차이를 비교합니다.
                이후 검색량과 브랜드 지표 변화를 함께 연결해 성과의 구조를 해석합니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">지역별 반응</span>
                <span class="modal__chip">매체 조합</span>
                <span class="modal__chip">타겟 도달</span>
                <span class="modal__chip">검색 신호</span>
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

    <div class="modal" data-modal="optimization" role="dialog" aria-modal="true" aria-labelledby="modal-optimization-title">
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__panel" tabindex="-1">
        <button class="modal__close" type="button" data-modal-close aria-label="닫기">×</button>
        <div class="modal__body">
          <span class="modal__eyebrow">03 Campaign Optimization</span>
          <h3 class="modal__title" id="modal-optimization-title">다음 캠페인 고도화</h3>
          <p class="modal__lead">
            성과 분석을 다음 타겟, 지역, 메시지, 매체 조합 개선안으로 연결합니다.
          </p>
          <div class="modal__grid">
            <div class="modal__block">
              <h4>이런 경우에 필요합니다</h4>
              <ul>
                <li>다음 캠페인에서 무엇을 유지하고 바꿀지 판단해야 하는 경우</li>
                <li>효과가 좋았던 지역과 매체 조합을 확장해야 하는 경우</li>
                <li>성과가 약했던 메시지나 타겟 전략을 조정해야 하는 경우</li>
                <li>캠페인을 단발 집행이 아니라 성장 루프로 만들고 싶은 경우</li>
              </ul>
            </div>
            <div class="modal__block">
              <h4>애드타입은 이렇게 설계합니다</h4>
              <p>
                캠페인 결과를 다음 실행안으로 재구성합니다. 강화할 타겟과 지역, 줄일 매체, 바꿔야 할 메시지,
                새롭게 테스트할 접점을 정리해 다음 캠페인의 설계 기준을 만듭니다.
              </p>
              <div class="modal__chips" aria-label="성과 지표">
                <span class="modal__chip">타겟 개선</span>
                <span class="modal__chip">지역 확장</span>
                <span class="modal__chip">메시지 조정</span>
                <span class="modal__chip">매체 최적화</span>
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

`
);

s = s.replace(/data-modal-target="search"/g, 'data-modal-target="brandmetric"');
s = s.replace(/querySelector\('\[data-modal-target="search"\]'\)/g, `querySelector('[data-modal-target="brandmetric"]')`);

const mobileCss = `
      #adtype-performance .performance-lab {
        grid-template-columns: 1fr !important;
      }

      #adtype-performance .insight-dashboard {
        min-height: 610px !important;
        padding: 24px !important;
        border-radius: 28px !important;
      }

      #adtype-performance .dashboard-grid {
        grid-template-columns: 1fr !important;
      }

`;
s = s.replace('      #adtype-performance .question-list,\n      #adtype-performance .action-lab,', '      #adtype-performance .question-list,\n      #adtype-performance .action-lab,');
s = s.replace('      #adtype-performance .translation__box,\n      #adtype-performance .translation__box:last-child {', mobileCss + '      #adtype-performance .translation__box,\n      #adtype-performance .translation__box:last-child {');

fs.writeFileSync(target, s, 'utf8');
console.log(target);
