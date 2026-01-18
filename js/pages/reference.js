// js/pages/reference.js
function renderReference(container) {
  container.innerHTML = `
                    <div class="max-w-6xl mx-auto fade-in">
                        <div class="text-center mb-8">
                            <h2 class="text-3xl font-bold text-gray-800">คลังความรู้ (Reference)</h2>
                            <p class="text-gray-600">รวมคำถามและคำตอบทั้งหมดเพื่อการค้นหาที่รวดเร็ว</p>
                        </div>

                        <!-- Search Box -->
                        <div class="mb-6">
                            <input type="text" id="searchInput" onkeyup="app.filterReference()" placeholder="🔍 ค้นหาคำถาม หรือ คำสำคัญ..." class="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm">
                        </div>

                        <div class="bg-white rounded-xl shadow-md overflow-hidden">
                            <div class="overflow-x-auto">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                                            <th class="py-3 px-6 text-left">หมวดหมู่</th>
                                            <th class="py-3 px-6 text-left">คำถาม</th>
                                            <th class="py-3 px-6 text-left">คำตอบที่ถูกต้อง</th>
                                        </tr>
                                    </thead>
                                    <tbody id="referenceTableBody" class="text-gray-600 text-sm">
                                        ${quizData
                                          .map((q) => {
                                            const correct = q.options.find(
                                              (o) => o.isCorrect,
                                            );
                                            return `
                                                <tr class="border-b border-gray-200 hover:bg-gray-50">
                                                    <td class="py-3 px-6 text-left whitespace-nowrap"><span class="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-xs">${q.category}</span></td>
                                                    <td class="py-3 px-6 text-left font-medium">${q.question}</td>
                                                    <td class="py-3 px-6 text-left text-green-700">${correct.text}</td>
                                                </tr>
                                            `;
                                          })
                                          .join("")}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
}

function filterReference() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase();
  const table = document.getElementById("referenceTableBody");
  const tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const tdQuestion = tr[i].getElementsByTagName("td")[1];
    const tdAnswer = tr[i].getElementsByTagName("td")[2];
    if (tdQuestion || tdAnswer) {
      const txtValueQ = tdQuestion.textContent || tdQuestion.innerText;
      const txtValueA = tdAnswer.textContent || tdAnswer.innerText;
      if (
        txtValueQ.toLowerCase().indexOf(filter) > -1 ||
        txtValueA.toLowerCase().indexOf(filter) > -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
