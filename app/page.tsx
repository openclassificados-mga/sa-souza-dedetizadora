"use client"
import Image from "next/image"
import FooterCTA from "@/components/footer-cta"
import { motion } from "framer-motion"
import { dadosCliente } from "@/data/cliente"

const Page = () => {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                    {dadosCliente.conteudo.tituloPrincipal}
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  {dadosCliente.conteudo.subtitulo}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {dadosCliente.recursos.map((recurso, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-amber-500/30 border border-amber-500/60 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-amber-400 text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base">{recurso.titulo}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm">{recurso.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full pt-4 sm:pt-6">
                <motion.a
                  href={dadosCliente.contato.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(245, 158, 11, 0.5)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold text-base rounded-full shadow-lg transition-colors duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Solicitar Orçamento
                </motion.a>

                <motion.a
                  href={dadosCliente.contato.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0.95, boxShadow: "0 0 0 rgba(245, 158, 11, 0.5)" }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.7)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-zinc-700 bg-zinc-900/50 hover:bg-amber-500 hover:text-black text-white font-extrabold rounded-full backdrop-blur-sm transition-colors duration-300 text-center text-2xl"
                >
                  {dadosCliente.contato.telefone}
                </motion.a>
              </div>
            </div>

            {/* Right Column - Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {dadosCliente.servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
                  {servico.destaque && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30">
                        <div className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="text-xs text-amber-300 font-medium">Popular</span>
                      </div>
                    </div>
                  )}
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{servico.icone}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{servico.titulo}</h3>
                    <p className="text-sm sm:text-base text-zinc-300">{servico.descricao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-balance">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              Avaliações de Clientes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Testimonial 1 - Carlos */}
            <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/brazilian-man-professional-portrait.jpg"
                    alt="Carlos Silva"
                    width={56}
                    height={56}
                    className="rounded-full w-14 h-14 object-cover border-2 border-amber-500/50"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">Carlos Silva</h4>
                    <p className="text-sm text-zinc-400">Proprietário de Imóvel</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  &quot;Tive problema com barata em casa e foi resolvido completamente. Atendimento rápido, profissional e com garantia. Super recomendo!&quot;
                </p>
              </div>
            </div>

            {/* Testimonial 2 - Mariana */}
            <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/brazilian-woman-professional-portrait.jpg"
                    alt="Mariana Costa"
                    width={56}
                    height={56}
                    className="rounded-full w-14 h-14 object-cover border-2 border-amber-500/50"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">Mariana Costa</h4>
                    <p className="text-sm text-zinc-400">Dona de Casa</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  &quot;Meu encanamento entupiu e não sabia o que fazer. Desentupiram na hora com equipamento profissional. Ficou como novo!&quot;
                </p>
              </div>
            </div>

            {/* Testimonial 3 - Roberto */}
            <div className="relative group overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/50 to-zinc-900/50 backdrop-blur-sm p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/brazilian-man-casual-portrait.jpg"
                    alt="Roberto Oliveira"
                    width={56}
                    height={56}
                    className="rounded-full w-14 h-14 object-cover border-2 border-amber-500/50"
                  />
                  <div>
                    <h4 className="font-semibold text-white text-base">Roberto Oliveira</h4>
                    <p className="text-sm text-zinc-400">Gerente Comercial</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  &quot;Precisei de dedetização urgente em minha empresa e consegui atendimento no mesmo dia. Equipe profissional, rápida e com atendimento 24h realmente confiável!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FooterCTA Section */}
        <FooterCTA />

        {/* Footer with divider and credit text */}
        <footer className="border-t border-zinc-700/50 mt-12 sm:mt-16 py-8 sm:py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <p className="text-sm sm:text-base text-zinc-400">
              Criado por{" "}
              <motion.a
                href="https://webstudiomga.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, color: "#fbbf24" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="font-semibold text-amber-400 hover:text-amber-300 transition-colors duration-300"
              >
                Webstudio
              </motion.a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

export default Page
