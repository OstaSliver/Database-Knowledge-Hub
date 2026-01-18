// js/pages/study.js
function renderStudy(container) {
    container.innerHTML = `
                    <div class="max-w-4xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-bold text-gray-800">โหมดศึกษา (Study Mode)</h2>
                            <p class="text-gray-600">คลิกที่การ์ดเพื่อดูคำตอบและคำอธิบาย</p>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-6">
                            ${quizData.map((q, idx) => {
                                const correctOpt = q.options.find(o => o.isCorrect);
                                return `
                                    <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition cursor-pointer" onclick="this.querySelector('.answer-reveal').classList.toggle('hidden')">
                                        <div class="p-6">
                                            <div class="flex justify-between items-start mb-4">
                                                <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">#${idx + 1} ${q.category}</span>
                                                <span class="text-blue-500 text-sm">👁️ เฉลย</span>
                                            </div>
                                            <h3 class="font-bold text-gray-800 mb-4 min-h-[3rem]">${q.question}</h3>
                                            
                                            <div class="answer-reveal hidden mt-4 pt-4 border-t border-gray-100 bg-green-50 -mx-6 -mb-6 p-6">
                                                <p class="font-bold text-green-800 mb-2">${correctOpt.text}</p>
                                                <p class="text-sm text-green-700">${correctOpt.rationale}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `;
}
