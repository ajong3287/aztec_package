import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AZTEC</span>
              <span className="text-sm text-green-600 font-medium">ECO</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-green-600">제품</a>
              <a href="#solutions" className="text-gray-700 hover:text-green-600">솔루션</a>
              <a href="#sustainability" className="text-gray-700 hover:text-green-600">지속가능성</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">문의</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                지구를 생각하는 포장재
                <span className="block text-green-600 mt-2">AZTEC과 함께</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                플라스틱 뽁뽁이를 대체하는 친환경 포장재로 고객의 브랜드 가치를 높이고 
                지구 환경을 보호하세요. 종이 완충재부터 생분해성 포장재까지.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                  무료 샘플 신청
                </button>
                <button className="border border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors">
                  제품 카탈로그
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 환경 영향 Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">환경 보호 효과</h2>
              <p className="text-gray-600">AZTEC 친환경 포장재로 만드는 변화</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">80%</h3>
                <p className="text-gray-600">플라스틱 사용량 절감</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">재활용 가능 소재</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">50%</h3>
                <p className="text-gray-600">CO2 배출량 감소</p>
              </div>
            </div>
          </div>
        </section>

        {/* 제품 소개 Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 제품 라인</h2>
              <p className="text-gray-600">다양한 친환경 포장재 솔루션을 제공합니다</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">종이 완충재</h3>
                <p className="text-gray-600 mb-4">
                  벌집 구조의 종이 뽁뽁이와 파쇄 종이 완충재. 
                  뛰어난 충격 흡수력과 100% 재활용 가능.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 플라스틱 대비 1.5배 가격</li>
                  <li>• 동일한 보호 효과</li>
                  <li>• 완전 재활용 가능</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">생분해성 포장재</h3>
                <p className="text-gray-600 mb-4">
                  옥수수 전분, 카사바 원료의 완전 생분해 포장재. 
                  6개월 내 자연 분해되는 혁신적 솔루션.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 6개월 내 완전 분해</li>
                  <li>• 프리미엄 브랜딩</li>
                  <li>• 고객 만족도 향상</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">맞춤형 솔루션</h3>
                <p className="text-gray-600 mb-4">
                  고객사의 제품과 브랜드에 최적화된 
                  맞춤형 친환경 포장재 개발 서비스.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 브랜드 로고 인쇄</li>
                  <li>• 제품별 최적화</li>
                  <li>• 컨설팅 서비스</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              친환경 포장재 전환을 시작하세요
            </h2>
            <p className="text-green-100 text-lg mb-8">
              무료 샘플과 전문 컨설팅으로 최적의 솔루션을 찾아드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
                무료 샘플 신청
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
                전문가 상담 예약
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-2xl font-bold">AZTEC</span>
              </div>
              <p className="text-gray-400">
                친환경 포장재 전문 솔루션 제공업체
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">제품</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">종이 완충재</a></li>
                <li><a href="#" className="hover:text-white">생분해성 포장재</a></li>
                <li><a href="#" className="hover:text-white">맞춤형 솔루션</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">서비스</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">B2B 솔루션</a></li>
                <li><a href="#" className="hover:text-white">컨설팅</a></li>
                <li><a href="#" className="hover:text-white">기술 지원</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <ul className="space-y-2 text-gray-400">
                <li>이메일: info@aztec-eco.com</li>
                <li>전화: 02-1234-5678</li>
                <li>주소: 서울시 강남구</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AZTEC ECO. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
