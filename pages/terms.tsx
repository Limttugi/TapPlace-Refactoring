import s from './terms.module.scss';

const TermsConditions = () => {
  return (
    <section className={s.container}>
      <h1 className={s.termsConditions}>탭플레이스 서비스 이용약관</h1>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제1조 (목적)</h4>
        <p className={s.nJoContent}>
          이 약관은 탭플레이스(이하 &quot;당사&quot;라 합니다)가 운영하는 탭플레이스 &quot;애플리케이션(이하
          &quot;앱&quot;이라고 합니다)의 서비스 이용 및 제공에 관한 제반 사항의 규정을 목적으로 합니다
        </p>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제2조 (용어의 정의)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다</li>
          <ul className={s.nJoContentSubContainer}>
            <li className={s.nJoContent}>
              1. &quot;서비스&quot;라 함은 구현되는 &quot;앱&quot;을 통하여 &quot;이용자&quot;가 이용할 수 있는 당사가
              제공하는 모든 서비스를 의미합니다.
            </li>
            <li className={s.nJoContent}>
              2. &quot;이용자&quot;란 &quot;앱&quot;을 이용하는 모든 자로서, 이 약관에 따라 &quot;앱&quot;이 제공하는
              서비스를 받는 자를 말합니다.
            </li>
            <li className={s.nJoContent}>
              3. &quot;결제수단이라 함은 &quot;앱&quot;을 통해 제공되는 서비스 정보(네이버페이, 카카오페이, 제로페이,
              페이코, 애플페이, 구글페이, 컨택리스)를 통틀어 말합니다.
            </li>
            <li className={s.nJoContent}>
              4. &quot;모바일 기기&quot;란 콘텐츠를 다운로드 받거나 설치하여 사용할 수 있는 기기로서, 휴대폰, 스마트폰,
              휴대정보단말기(PDA), 태블릿 등을 의미합니다.
            </li>
          </ul>
          <li className={s.nJoContent}>
            ② 이 약관에서 사용하는 용어의 정의는 본 조 제1항에서 정하는 것을 제외하고는 관계법령 및 서비스별 정책에서
            정하는 바에 의하며, 이에 정하지 아니한 것은 일반적인 상 관례에 따릅니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제3조 (약관의 효력 및 변경)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 본 약관은&quot;앱&quot; 내 또는 그 연결화면에 게시하거나 이용자에게 공지함으로써 효력이 발생합니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 불가피한 여건이나 사정이 있을 경우 「약관의 규제에 관한 법률」, 「정보통신망이용촉진 및 정보보호
            등에 관한 법률」등 관련 법령에 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
          </li>
          <li className={s.nJoContent}>
            ③ 당사가 약관을 개정할 경우에는 적용일자 및 개정내용, 개정사유 등을 명시하여 최소한 그 적용일 7일 이전부터
            &quot;앱&quot; 내 또는 그 연결화면에 게시하여 이용자에게 공지합니다. 다만, 변경된 내용이 이용자에게
            불리하거나 중대한 사항의 변경인 경우에는 그 적용일 30일 이전까지 본문과 같은 방법으로 공지합니다. 이 경우
            개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.
          </li>
          <li className={s.nJoContent}>
            ④ 당사가 약관을 개정할 경우 개정약관 공지 후 개정약관의 적용에 대한 이용자의 동의 여부를 확인합니다. 당사는
            제3항의 공지 또는 통지를 할 경우 이용자가 개정약관에 대해 동의 또는 거부의 의사표시를 하지 않으면 동의한
            것으로 볼 수 있다는 내용도 함께 공지 또는 통지를 하며, 이용자가 이 약관 시행일까지 거부의 의사표시를 하지
            않는다면 개정약관에 동의한 것으로 볼 수 있습니다. 이용자가 개정약관에 대해 동의하지 않는 경우 당사 또는
            이용자는 서비스 이용계약을 해지할 수 있습니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제4조 (약관 외 준칙)</h4>
        <p className={s.nJoContent}>
          이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 「약관의 규제에 관한 법률」, 「정보통신망이용촉진
          및 정보보호 등에 관한 법률」등 관련 법령 또는 상 관례에 따릅니다.
        </p>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제5조 (이용자 등록)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 이용자는 &quot;앱&quot;에서 약관을 동의하여 &quot;앱&quot;에서 정한 양식에 따라 이용자 정보를 기입을 하면,
            당사는 이러한 신청을 승낙하여 이용자 등록이 완료 됩니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 원칙적으로 전 항에 따라 이용자 등록에 대하여 승낙함을 원칙으로 합니다.
          </li>
          <li className={s.nJoContent}>
            ③ 이용자는 가입시 등록한 이용자정보의 변경이 발생한 경우, 즉시 전자우편 등을 통하여 당사로 변경을 요청할 수
            있습니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제6조 (서비스 이용 해지)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 이용자는 서비스 이용을 원하지 않는 경우 언제든지 서비스 이용 해지를 할 수 있으며, 이 경우
            &quot;앱&quot;내에 저장된 이용 기록은 즉시 삭제되며, 당사에 저장되어있는 개인정보 또한 삭제됩니다. 삭제가
            진행 된 이후 복구가 불가능하게 됩니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 이용자가 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 등 본 계약을 유지할 수 없는 중대한
            사유가 있는 경우에는 이용자에게 통지하고, 서비스 이용을 제한․중지하거나 이용자 자격을 상실시킬 수 있습니다.
          </li>
          <li className={s.nJoContent}>
            ③ 당사가 이용자자격을 상실시키는 경우에는 이용자 등록을 말소합니다. 이 경우 이용자에게 이를 통지하고, 이용자
            등록 말소 전에 소명할 기회를 부여합니다.
          </li>
          <li className={s.nJoContent}>
            ④ 당사는 최근의 서비스 이용일부터 연속하여 1년 동안 당사의 서비스를 이용하지 않은 이용자의 개인정보를
            보호하기 위해 이용계약을 해지하고 이용자의 개인정보를 파기 등의 조치를 취할 수 있습니다. 이 경우 조치일 30일
            전까지 계약 정지 또는 해지, 개인정보 파기 등의 조치가 취해진다는 사실 및 파기될 개인정보 등을 이용자에게
            통지합니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제7조 (이용자에 대한 통지)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사가 이용자에 대한 통지를 하는 경우, &quot;앱&quot; 알림을 통해 통지할 수 있습니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 불특정다수 이용자에 대한 통지의 경우 30일 이상 &quot;앱&quot;에 게시함으로서 개별 통지에 갈음 할 수
            있습니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제8조 (당사의 의무)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사는 관련 법령, 이 약관에서 정하는 권리의 행사 및 의무의 이행을 신의에 따라 성실하게 준수합니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 이용자가 안전하게 서비스를 이용할 수 있도록 개인정보(신용정보 포함)보호를 위해 보안시스템을
            갖추어야 하며 개인정보처리방침을 고시하고 준수합니다. 당사는 이 약관 및 개인정보처리방침에서 정한 경우를
            제외하고는 이용자의 개인정보가 제3자에게 공개 또는 제공되지 않도록 합니다.
          </li>
          <li className={s.nJoContent}>
            ③ 당사는 계속적이고 안정적인 서비스의 제공을 위하여 서비스 개선을 하던 중 설비에 장애가 생기거나 데이터 등이
            멸실, 훼손된 때에는 천재지변, 비상사태, 현재의 기술로는 해결이 불가능한 장애나 결함 등 부득이한 사유가 없는
            한 지체 없이 이를 수리 또는 복구하도록 최선의 노력을 다합니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제9조 (이용자의 의무)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 이용자은 당사에서 제공하는 서비스의 이용과 관련하여 다음 각 호에 해당하는 행위를 해서는 안 됩니다.
          </li>
          <ul className={s.nJoContentSubContainer}>
            <li className={s.nJoContent}>1. 악의의 목적으로 피드백 시스템을 통하여 거짓된 정보를 요청하는 행위</li>
            <li className={s.nJoContent}>
              2. 당사의 운영자를 가장하거나 다른 이용자 또는 제3자의 명의를 도용하여 메일을 발송하는 행위, 다른 이용자
              또는 제3자로 가장하거나 제3자와의 관계를 허위로 명시하는 행위
            </li>
            <li className={s.nJoContent}>3. 다른 이용자의 개인정보를 무단으로 수집⋅저장⋅게시 또는 유포하는 행위 </li>
            <li className={s.nJoContent}>
              4. 서비스를 무단으로 영리, 영업, 광고, 홍보, 정치활동, 선거운동 등 본래의 용도 이외의 용도로 이용하는 행위
            </li>
            <li className={s.nJoContent}>
              5. 당사의 서비스를 이용하여 얻은 정보를 무단으로 복제․유통․조장하거나 상업적으로 이용하는 행위, 알려지거나
              알려지지 않은 버그를 악용하여 서비스를 이용하는 행위
            </li>
            <li className={s.nJoContent}>
              6. 다른 이용자 또는 제3자를 기망하여 이득을 취하는 행위, 당사의 서비스의 이용과 관련하여 타인에게 피해를
              입히는 행위
            </li>
            <li className={s.nJoContent}>
              7. 당사나 다른 이용자 또는 제3자에 대하여 지식재산권 또는 초상권 기타 일체의 권리를 침해하는 행위, 명예를
              훼손하거나 모욕, 욕설, 폭언 등을 하는 행위, 그 외에 손해를 가하는 행위
            </li>
            <li className={s.nJoContent}>
              8. 법령에 의하여 전송 또는 게시가 금지된 정보, 파일 등이나 컴퓨터 소프트웨어⋅하드웨어 또는 전기통신장비의
              정상적인 작동을 방해⋅파괴할 목적으로 고안된 바이러스⋅컴퓨터 코드⋅파일⋅프로그램 등을 고의로 전송⋅게시⋅유포
              또는 사용하는 행위
            </li>
            <li className={s.nJoContent}>
              9. 당사로부터 특별한 권리를 부여받지 않고 앱을 변경하거나, 앱에 다른 프로그램을 추가⋅삽입하거나, 서버를
              해킹⋅역설계하거나, 소스 코드나 애플리케이션 데이터를 유출⋅변경하거나, 별도의 서버를 구축하거나, 웹사이트의
              일부분을 임의로 변경⋅도용하여 당사를 사칭하는 행위
            </li>
            <li className={s.nJoContent}>10. 그 밖에 관련 법령에 위반되거나 선량한 풍속 기타 사회통념에 반하는 행위</li>
          </ul>
          <li className={s.nJoContent}>
            ② 이용자의 개인정보, &quot;앱&quot;이 설치된 모바일 기기에 관한 관리책임은 이용자에게 있으며, 이용자의 과실
            및 기타 타인의 불법행위로 인한 이용자정보, 이용자가 &quot;앱&quot;에 등록한 정보가 유출되는 경우 당사는
            책임지지 않습니다.
          </li>
          <li className={s.nJoContent}>③ 이용자는 본 약관 및 관련법령에 규정한 사항을 준수하여야 합니다.</li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제10조 (서비스의 이용)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① &quot;앱&quot;은 다음과 같은 서비스를 이용자에게 제공합니다. 단, 당사가&quot;앱&quot;으로 제공하는 서비스
            이용을 위해 필요시 이용자에게 위치정보이용약관 및 개인정보 제공에 관한 동의를 추가로 요구할 수 있으며,
            동의하지 않을 경우 서비스의 전부 또는 일부가 제한될 수 있습니다.
          </li>
          <ul className={s.nJoContentSubContainer}>
            <li className={s.nJoContent}>1. 가맹점 간편결제 결제수단 정보 제공</li>
            <li className={s.nJoContent}>
              2. 당사는 이용자에게 별도의 동의를 받은 경우 서비스 이용에 대한 유용한 각종 정보에 대하여 “앱”에 게재하는
              것 이외에 푸시(Push) 알림 등의 방법으로 이용자에게 제공할 수 있습니다. 단, 별도의 동의가 없더라도 당사는
              서비스 이용에 관한 정보나 제휴 매장과 관련한 광고를 “앱”에 게재할 수 있습니다.
            </li>
            <li className={s.nJoContent}>
              3. 서비스의 이용은 “앱”의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴를 원칙으로 합니다. 다만,
              정기점검 등의 필요로 인하여 당사가 정한 날 및 시간에 대해서는 예외로 합니다.
            </li>
            <li className={s.nJoContent}>
              4. 당사는 “앱” 시스템 등의 보수, 점검, 교체, 시스템의 고장, 통신의 두절, 기타 불가항력적 사유가 발생한
              경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 다만, 서비스 중단의 경우 당사는 “앱”을 통해 이를
              고지합니다.
            </li>
          </ul>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제11조 (개인정보의 보호 및 사용)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사는 이용자의 정보 수집시 원활한 서비스 제공을 위해 필요한 최소한의 정보를 수집합니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사가 이용자의 개인식별이 가능한 개인정보 및 계정정보를 수집하는 때에는 반드시 당해 이용자의 동의를
            받습니다.
          </li>
          <li className={s.nJoContent}>
            ③ 당사는 관련 법령에 의하거나, 관련 국가기관 등의 요청이 있는 경우를 제외하고는 이용자의 개인정보를 본인의
            동의 없이 제3자에게 제공하지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ④ 이용자는 언제든지 당사가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정 또는 동의 철회를 요구할 수
            있으며 당사는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다.
          </li>
          <li className={s.nJoContent}>
            ⑤ 기타 개인정보관련사항은 “앱”에 별도로 게시하는 개인정보처리방침에 의거합니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제12조 (당사의 면책)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사는 이 약관 제10조 제3항, 제4항의 사유로 서비스 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가
            입은 손해에 대해서는 별도의 보상을 하지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 이용자의 고의 또는 과실로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ③ 서비스와 관련하여 게재된 정보나 자료 등의 신뢰성, 정확성 등에 대하여 당사는 고의 또는 중대한 과실이 없는
            한 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ④ 당사는 무료로 제공되는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대해서는 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ⑤ 당사는 이용자가 서비스를 이용하여 기대하는 이익을 얻지 못하거나 상실한 것에 대하여 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ⑥ 당사는 이용자가 모바일 기기 등을 관리하지 않아 발생하는 손해에 대해 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ⑦ 이용자가 모바일 기기의 변경, 모바일 기기의 번호 변경, 운영체제(OS) 버전의 변경, 해외 로밍, 통신사 변경
            등으로 인해 콘텐츠 전부나 일부의 기능을 이용할 수 없는 경우 당사는 이에 대해 책임을 지지 않습니다.
          </li>
          <li className={s.nJoContent}>
            ⑧ 이용자가 당사가 제공하는 콘텐츠나 서비스이 이용을 해지한 경우 당사는 이에 대해 책임을 지지 않습니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제13조 (저작권 등의 귀속)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사가 제작한 서비스 내의 콘텐츠에 대한 저작권과 기타 지식재산권은 당사에 귀속합니다.
          </li>
          <li className={s.nJoContent}>
            ② 이용자는 당사가 제공하는 서비스를 이용하여 얻은 정보 중에서 당사 또는 제공업체에 지식재산권이 귀속된
            정보를 당사 또는 제공업체의 사전 동의 없이 복제⋅전송 등의 방법(편집, 공표, 공연, 배포, 방송, 2차적 저작물
            작성 등을 포함합니다. 이하 같습니다)에 의하여 영리목적으로 이용하거나 타인에게 이용하게 하여서는 안 됩니다.
          </li>
          <li className={s.nJoContent}>
            ③ 이 조는 당사가 서비스를 운영하는 동안 유효하며, 서비스 이용 해지 후에도 지속적으로 적용됩니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제14조 (이용자의 고충처리 및 분쟁해결)</h4>
        <ul className={s.nJoContentContainer}>
          <li className={s.nJoContent}>
            ① 당사는 이용자의 편의를 고려하여 이용자의 의견이나 불만을 제시하는 방법을 서비스 내 또는 그 연결화면에
            안내합니다.
          </li>
          <li className={s.nJoContent}>
            ② 당사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 객관적으로 인정될 경우에는 합리적인 기간 내에 이를
            신속하게 처리합니다. 다만, 처리에 장기간이 소요되는 경우에는 이용자에게 장기간이 소요되는 사유와 처리일정을
            서비스 내 공지하거나 제7조에 따라 통지합니다.
          </li>
        </ul>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제15조 (재판권 및 준거법)</h4>
        <p className={s.nJoContent}>
          이 약관은 대한민국 법률에 따라 규율되고 해석됩니다. 당사와 이용자 간에 발생한 분쟁으로 소송이 제기되는
          경우에는 법령에 정한 절차에 따른 법원을 관할 법원으로 합니다.
        </p>
      </article>
      <article className={s.nJoWrapper}>
        <h4 className={s.nJoTitle}>제16조 (서비스 이용약관 변경)</h4>
        <p className={s.nJoContent}>① 이 서비스 이용약관은 2022. 09. 16. 부터 적용됩니다.</p>
      </article>
    </section>
  );
};

export default TermsConditions;
