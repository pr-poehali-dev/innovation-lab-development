import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начать проектирование интерьера?",
    answer:
      "Начните с замеров и составления плана квартиры. Затем определите, как вы хотите жить: нужна ли открытая планировка, отдельный кабинет, гардеробная. Только после этого переходите к выбору стиля и материалов.",
  },
  {
    question: "Какой стиль выбрать для небольшой квартиры?",
    answer:
      "Для небольших пространств лучше всего работают минимализм и скандинавский стиль. Светлые тона, меньше мебели, встроенные системы хранения — всё это визуально увеличивает пространство и делает его более воздушным.",
  },
  {
    question: "Как правильно организовать хранение?",
    answer:
      "Встроенные шкафы от пола до потолка — ваш лучший друг. Они используют весь объём комнаты и не загромождают пространство. Дополнительно: хранение под кроватью, многофункциональная мебель с ящиками, открытые полки только для декоративных предметов.",
  },
  {
    question: "Как выбрать цветовую палитру?",
    answer:
      "Начните с нейтральной базы: белый, бежевый, светло-серый. Затем добавьте 1–2 акцентных цвета в деталях — подушках, шторах, декоре. Такой подход даёт цельность и легко обновляется без ремонта.",
  },
  {
    question: "Стоит ли делать ремонт поэтапно?",
    answer:
      "Да, если бюджет ограничен. Начните с «черновых» работ: стяжка, электрика, сантехника — всё, что потом не переделать. Затем отделка стен и полов. Мебель и декор можно добавлять постепенно — это даже интереснее.",
  },
  {
    question: "Как не ошибиться с освещением?",
    answer:
      "Используйте многоуровневое освещение: основной свет на потолке, рабочий свет над столешницами и рабочим местом, и акцентный — торшеры, бра, подсветка полок. Регулируемая яркость (диммеры) добавляет гибкость под любое настроение.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы о дизайне</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Полезно знать
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}