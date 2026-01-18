function renderHome(container) {
  container.innerHTML = `
                    <div class="max-w-4xl mx-auto text-center space-y-8 mt-10">
                        <div class="space-y-4">
                            <h2 class="text-4xl font-bold text-gray-800">ยินดีต้อนรับสู่ศูนย์การเรียนรู้ระบบฐานข้อมูล</h2>
                            <p class="text-xl text-gray-600">ทดสอบความรู้ ทบทวนเนื้อหา และวิเคราะห์จุดแข็งของคุณในวิชา Database Systems</p>
                        </div>

                        <div class="grid md:grid-cols-3 gap-6 mt-12">
                            <!-- Quiz Card -->
                            <div onclick="app.startQuiz()" class="bg-white p-8 rounded-xl shadow-lg border-b-4 border-blue-500 cursor-pointer btn-hover hover:bg-blue-50 transition">
                                <div class="text-4xl mb-4">📝</div>
                                <h3 class="text-2xl font-bold text-gray-800 mb-2">ทำแบบทดสอบ</h3>
                                <p class="text-gray-600">ทดสอบความรู้ 40 ข้อ พร้อมระบบตรวจคะแนนและเฉลยละเอียด</p>
                            </div>

                            <!-- Study Card -->
                            <div onclick="app.router('study')" class="bg-white p-8 rounded-xl shadow-lg border-b-4 border-green-500 cursor-pointer btn-hover hover:bg-green-50 transition">
                                <div class="text-4xl mb-4">📖</div>
                                <h3 class="text-2xl font-bold text-gray-800 mb-2">โหมดศึกษา</h3>
                                <p class="text-gray-600">ทบทวนเนื้อหาแบบ Flashcards และดูคำอธิบายโดยไม่ต้องกังวลเรื่องคะแนน</p>
                            </div>

                            <!-- Reference Card -->
                            <div onclick="app.router('reference')" class="bg-white p-8 rounded-xl shadow-lg border-b-4 border-yellow-500 cursor-pointer btn-hover hover:bg-yellow-50 transition">
                                <div class="text-4xl mb-4">📚</div>
                                <h3 class="text-2xl font-bold text-gray-800 mb-2">คลังความรู้</h3>
                                <p class="text-gray-600">ค้นหาคำศัพท์ นิยาม และคำตอบทั้งหมดในรูปแบบตาราง</p>
                            </div>
                        </div>

                        <!-- Intro / Context Section -->
                        <div class="mt-12 bg-white p-6 rounded-lg shadow-sm text-left">
                            <h4 class="text-lg font-bold text-gray-700 mb-2">เกี่ยวกับเนื้อหา</h4>
                            <p class="text-gray-600 leading-relaxed">
                                แอปพลิเคชันนี้รวบรวมเนื้อหาสำคัญจากวิชาระบบฐานข้อมูล ครอบคลุมตั้งแต่แนวคิดพื้นฐาน (Basic Concepts), 
                                บทบาทหน้าที่ (Roles), สถาปัตยกรรม (Architecture), การสร้างแบบจำลองข้อมูล (Data Modeling), 
                                จนถึงเทคโนโลยีฐานข้อมูลสมัยใหม่ (Modern DBs) โดยเน้นความเข้าใจในเชิงลึกผ่านคำอธิบาย (Rationale) ในทุกคำตอบ
                            </p>
                        </div>
                    </div>
                `;
}
