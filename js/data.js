/*
 * data.js — ÚNICA FUENTE DE VERDAD del sitio (versión TRILINGÜE).
 * El contenido vive dentro de CONTENT, separado por idioma: pt | es | en.
 * El archivo main.js lee el idioma activo y construye la página.
 * Para editar un texto, busca la clave dentro del idioma correspondiente.
 */

// Idiomas disponibles y etiqueta que aparece en el selector.
const LANGS = [
  { code: "pt", label: "PT-BR" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" }
];
const DEFAULT_LANG = "pt";

const CONTENT = {
  /* ===================== PORTUGUÊS (PT-BR) ===================== */
  pt: {
    marca: "DE MODA KISSODEL",
    tagline: "Coleção Pijamas • Proposta 2026",
    nav: [
      { id: "01", label: "Capa" }, { id: "02", label: "Estúdio" }, { id: "03", label: "Conceito" },
      { id: "04", label: "Modelos" }, { id: "05", label: "Estampas" }, { id: "06", label: "Tecidos" },
      { id: "07", label: "Fichas" }, { id: "08", label: "Mockups" }, { id: "09", label: "Investimento" }, { id: "10", label: "Contato" }
    ],
    hero: {
      etiqueta1: "Proposta Exclusiva • 2026",
      etiqueta2: "Marca Própria Brasileira — Primeira Coleção",
      marcaMini: "DeModaKissOdel Studio",
      titulo: ["COLEÇÃO", "PIJAMAS", "FEMININOS"],
      tags: ["Clássica", "Sofisticada", "Atemporal", "Minimalista"],
      refVisual: "3 conjuntos hero — acetinado branco, floral bege, burgundy minimalista",
      estudio: ["De Moda KissOdel Studio", "Odelkis Dominguez", "Los Frailes, Santo Domingo", "República Dominicana"],
      contato: ["@demodakissodel", "Founder & Lead Designer", "Gold-stitched elegance", "Confidencial 2026"],
      frase: "Conforto nobre com acabamento de alta-costura"
    },
    about: {
      eyebrow: "02 / Sobre o Estúdio", tituloTop: "Gold-stitched", tituloItalic: "elegance",
      parrafos: [
        "De Moda KissOdel é um estúdio dominicano com obsessão por acabamento. Cada peça é pensada como joia têxtil — mínima por fora, impecável por dentro.",
        "Localização estratégica em Los Frailes, Santo Domingo, com acesso a produção artesanal de alto padrão e logística para Brasil e EUA."
      ],
      sistemaTitulo: "Sistema KO KISSODEL — aplicado aos pijamas",
      sistema: [
        { k: "Bordado KO", v: "1.5cm fio dourado #C9A86A, posicionado no bolso superior esquerdo, ponto cheio denso" },
        { k: "Botões", v: "Dourados foscos, 4 furos, 11mm — mesmo lote para toda coleção" },
        { k: "Acabamento", v: "Costura francesa em toda lateral, piping duplo, viés interno dourado" },
        { k: "Caimento", v: "Modelagem pensada para movimento noturno, sem repuxar, sem marcar" }
      ],
      portfolioTitulo: "11 looks",
      portfolioTexto: "Collection / Tech Packs / Textiles — mesma estrutura que usaremos para pijamas, nível internacional.",
      portfolioUrl: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection",
      portfolioCta: "Ver Portfólio",
      diferencialTitulo: "Diferencial RD",
      diferencial: "Mão de obra especializada em acabamento francês, custo competitivo, produção piloto sem escala industrial obrigatória.",
      portfolioLabel: "Portfólio Validado"
    },
    concept: {
      eyebrow: "03 / Conceito e Estética", titulo: ["Clássica,", "sofisticada,", "atemporal."],
      parrafo1a: "Busco estética clássica, sofisticada, atemporal, minimalista, com foco absoluto em ",
      parrafo1b: "conforto, qualidade, caimento e acabamentos refinados.",
      parrafo1c: " Nada de excesso. Cada detalhe tem função e beleza.",
      parrafo2: "A coleção é pensada para a mulher que dorme bem porque se veste bem — mesmo em casa. Toque de hotel 5 estrelas, caimento de alfaiataria leve.",
      pilares: [
        { n: "01", t: "Conforto Nobre", d: "Tecidos que respiram, elástico que não marca, modelagem que acompanha o corpo em movimento. Noite inteira sem ajuste." },
        { n: "02", t: "Caimento Perfeito", d: "Ombro caído suave, perna com leve afunilamento, comprimento pensado para descalça ou com meia." },
        { n: "03", t: "Detalhe Refinado", d: "Piping dourado de 3mm, bolso funcional real, bordado KO discreto. Luxo silencioso." }
      ],
      inspiracaoTitulo: "Inspiração Direta",
      inspiracao: "Paleta validada: branco acetinado, bege floral, burgundy profundo",
      paleta: [
        { c: "#FFF8F0", l: "Branco Acetinado" }, { c: "#E8DCCF", l: "Bege Floral" },
        { c: "#4B0014", l: "Burgundy" }, { c: "#C9A86A", l: "Dourado KO" }
      ]
    },
    models: {
      eyebrow: "04 / Modelos Exclusivos", titulo: ["5 modelos", "essenciais"],
      intro: "Cada modelo com ficha completa, graduação e mockup. Bolsos funcionais como assinatura — diferencial raro em pijamas femininos premium.",
      badge: "Bolso funcional = diferencial competitivo",
      incluiLabel: "Inclui ficha + mockup + graduação",
      tecidoLabel: "Tecido:", detalheLabel: "Detalhe:",
      lista: [
        { id: "01", nome: "Pijama Longo Abotoado com Bolsos Funcionais", tecido: "Branco Acetinado 180gsm", detalhe: "Gola colarinho, abotoamento dourado, 2 bolsos chapados funcionais, piping ouro", caimento: "Solto elegante" },
        { id: "02", nome: "Conjunto Short Doll com Estampa Autoral", tecido: "Algodão Acetinado — Floral Minimalista Bege", detalhe: "Top com alça fina + short com elástico conforto, bordado KO no bolso", caimento: "Curto leve" },
        { id: "03", nome: "Pijama Longo Minimalista", tecido: "Modal 160gsm — Burgundy #4B0014", detalhe: "Sem botões, decote V suave, elástico interno, acabamento francês", caimento: "Fluido" },
        { id: "04", nome: "Camisola com Bolso", tecido: "Seda Mista ou Linho Misto", detalhe: "Comprimento midi, fenda lateral sutil, bolso lateral invisível, viés dourado", caimento: "Romântico minimal" },
        { id: "05", nome: "Conjunto Calça + Blusa Oversized", tecido: "Linho Misto 14/m ou Modal", detalhe: "Blusa oversized com punho, calça com cordão interno + bolso faca funcional", caimento: "Loungewear chique" }
      ],
      extraLabel: "Extra opcional", extraTitulo: "6º modelo sob consulta",
      extraTexto: "Robe curto com faixa ou conjunto cropped para verão. Mesmo valor por modelo adicional: US$ 520."
    },
    prints: {
      eyebrow: "05 / Estampas Autorais e Padrões", titulo: ["Exclusividade", "que vende"],
      parrafo1: "2 a 3 estampas criadas do zero para sua marca. Não é banco de estampa — é desenho autoral com repetição técnica perfeita para rolo.",
      parrafo2a: "Direitos transferidos após pagamento final.", parrafo2b: " Você recebe AI, PNG em alta e relatório de repetição.",
      repeticaoTitulo: "Padrão de Repetição Técnica",
      repeticaoTexto: "Repeat de 64x64cm, encaixe perfeito, 300dpi. Testado em modal e algodão acetinado. Aprovado para sublimação e rotativa.",
      estampas: [
        { nome: "Floral Minimalista Bege", desc: "Base da foto hero. Flores miúdas em traço fino, fundo areia.", paleta: ["#EDE1D1", "#C9A86A", "#8B6A4F"] },
        { nome: "Micro-floral Rose", desc: "Variação romântica, botõezinhos rosé desbotado, 1.2cm escala.", paleta: ["#F5E8E2", "#D6A9A0", "#4B0014"] },
        { nome: "Liso com Piping Dourado", desc: "Não é estampa, é detalhe: liso + viés ouro 3mm + bordado KO.", paleta: ["#FFF8F0", "#C9A86A", "#4B0014"] }
      ],
      bottomNota: "@demodakissodel — pg 05/10 • Direitos transferidos após pagamento",
      entregaveis: "AI + PNG 300dpi + Rapport"
    },
    fabrics: {
      eyebrow: "06 / Tecidos, Aviamentos e Acabamentos", titulo: "Toque que fideliza",
      intro: "Seleção curada para Brasil — fornecedores com entrega rápida, toque premium e preço competitivo para margem saudável.",
      tablaTitulo: "Tecidos Nobres — Tabela Base", tablaNota: "Valores referência BR/USD",
      tecidos: [
        { tecido: "Algodão Acetinado 180gsm", toque: "Frio, brilho suave, respirável", uso: "Modelo 01, 02", preco: "$12.50/m", largura: "1.50m" },
        { tecido: "Modal 160gsm", toque: "Macio extremo, cai bem, anti pilling", uso: "Modelo 03, 05", preco: "$11.00/m", largura: "1.80m" },
        { tecido: "Seda Mista", toque: "Luxo leve, fresco", uso: "Modelo 04", preco: "$18.00/m", largura: "1.40m" },
        { tecido: "Linho Misto", toque: "Textura natural chique", uso: "Modelo 04, 05", preco: "$14.00/m", largura: "1.50m" }
      ],
      tablaPie: "* Preços de referência atacado Brasil, sem frete. Estimativa consumo médio pijama longo: 2.8m — short: 1.6m — camisola: 2.2m",
      aviamentosTitulo: "Aviamentos",
      aviamentos: [
        { k: "Botões dourados #C9A86A", d: "Fosco, 4 furos, 11mm — 8 unidades por pijama longo" },
        { k: "Viés dourado", d: "Cetim 12mm, duplo para piping 3mm — acabamento interno limpo" },
        { k: "Elástico conforto", d: "3cm, toque pêssego, não rola — cintura short e calça" },
        { k: "Etiqueta KO bordada", d: "Tafetá, dourado sobre off-white, 3x1.5cm — nuca e lateral" }
      ],
      acabamentosTitulo: "Acabamentos — Assinatura KISSODEL",
      acabamentos: ["Costura francesa", "Piping duplo", "Bolso funcional reforçado", "Barra italiana 3cm", "Viés interno limpo"],
      acabamentosNota: "Mesmo padrão do portfólio streetwear, adaptado para delicadeza do sleepwear. Nenhum overlock aparente."
    },
    techpack: {
      eyebrow: "07 / Fichas Técnicas + Modelagem", titulo: ["Pronto para", "Audaces / Lectra"],
      parrafos: [
        "Cada modelo com ficha técnica completa no mesmo padrão do portfólio — BOM, sequência operacional, medidas base, tolerâncias, acabamentos.",
        "Modelagem base em tamanho M + tabela + graduação XS-XXL (ou S/M/L conforme sua preferência).",
        "Arquivos: AI editável + PDF print + DXF opcional."
      ],
      sistemaLabel: "Sistema", sistemaTexto: "BOM + Medidas + Construção + Acabamento — igual portfolio",
      fichaLabel: "Exemplo Formato — Ficha Técnica",
      fichaTitulo: "01 - Pijama Longo Abotoado com Bolsos Funcionais",
      fichaRef: "Ref: PJ01-WH • Tecido: Algodão Acetinado Branco 180gsm • Coleção: Primeira",
      bomTitulo: "BOM — Bill of Materials",
      bom: [
        ["Tecido principal", "Algodão acetinado branco 180gsm", "2.8m"], ["Botões dourados", "Fosco 11mm 4 furos", "8 un"],
        ["Viés dourado", "Cetim 12mm → piping 3mm", "2.2m"], ["Linha", "Poliéster 120, off-white + ouro", "—"],
        ["Etiqueta", "KO bordada tafetá", "2 un"], ["Embalagem", "Saco acetinado + tag ouro", "1 kit"]
      ],
      sequenciaTitulo: "Sequência Construtiva",
      sequencia: [
        "Fechar ombros costura francesa", "Aplicar piping dourado na gola e carcela", "Pregar bolsos funcionais chapados (reforço canto)",
        "Fechar laterais costura francesa", "Barra italiana 3cm + etiqueta lateral", "Casear e pregar botões dourados",
        "Bordado KO 1.5cm bolso esquerdo + controle qualidade"
      ],
      medidasTitulo: "Tabela de Medidas — Base M",
      medidas: [
        ["Busto", "108cm", "+/-1"], ["Cintura", "106cm", "+/-1"], ["Quadril", "112cm", "+/-1"],
        ["Comp. total", "78cm blusa / 102cm calça", "+/-0.8"], ["Largura bolso", "13cm x 14cm", "funcional"]
      ],
      graduacaoLabel: "Graduação",
      graduacao: "XS-XXL automática — incremento 4cm busto/cintura, 1.5cm comprimento",
      graduacaoArquivos: "Arquivos: AI + PDF + DXF compatível Audaces/Lectra",
      desenhoLabel: "Desenho Técnico", desenhoTecnico: "Frente / Costas / Detalhe bolso + piping"
    },
    mockups: {
      eyebrow: "08 / Mockups Digitais e Peça-Piloto", titulo: ["Ver antes", "de cortar"],
      etiquetaImg: "Mockups Digitais 3D", etiquetaImgSub: "Caimento real — tecido, luz, dobra",
      vistas: ["Frente", "Costas", "Detalhe bolso KO"],
      block1Titulo: "Mockups 3D Digitais",
      block1Texto: "Dos 3 conjuntos da imagem hero em alta resolução — frente, costas, detalhe. Simulação de tecido real: brilho do acetinado, queda do modal, transparência sutil da seda mista. Ideal para e-commerce, pré-venda e aprovação.",
      block2Titulo: "Peça-Piloto Físico — Opcional",
      block2TextoA: "Gestão completa em RD: compra de tecido local, corte, costura francesa, bordado KO, acabamento, fotos. ",
      block2TextoB: "US$ 800 por modelo.", block2TextoC: " Não inclui compra física de tecido em larga escala — piloto apenas.",
      block2Nota: "Você recebe vídeo de construção + fotos detalhadas + ajustes anotados para produção final no Brasil.",
      entregaveisLabel: "Entregáveis Mockup", entregaveisMockup: "PNG 4000px, fundo transparente + lifestyle, arquivo CLO 3D opcional",
      tempoLabel: "Tempo Piloto", tempoPiloto: "10-12 dias úteis após aprovação tecidos"
    },
    investment: {
      eyebrow: "09 / Investimento e Cronograma", titulo: ["Investimento", "claro, sem surpresa"],
      refA: "Referência validada: Excel de custos já testado — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adaptado para pijamas.",
      refB1: "Custo peça média streetwear: $65-$95", refB2: " → adaptado pijamas: ", refB3: "$35-$60", refB4: " dependendo tecido, com margem saudável para premium.",
      pacotes: [
        { tipo: "STANDARD", modelos: "4-6 modelos", valor: "US$ 3,200", destaque: false,
          inclui: ["Mood + direção criativa", "2-3 estampas autorais exclusivas", "Desenhos técnicos planificados", "Fichas técnicas completas (BOM)", "Tabela de medidas + graduação XS-XXL", "Mockups 3D caimento real", "Board tecidos + aviamentos", "Excel custos adaptado pijamas"] },
        { tipo: "PREMIUM com piloto físico", modelos: "4-6 modelos + piloto RD", valor: "US$ 4,800", destaque: true,
          inclui: ["Tudo do Standard +", "Gestão peça-piloto físico em RD", "Vídeo construção + ajustes", "Fotos HD piloto para produção BR", "Acompanhamento 2 semanas pós-entrega"], selo: "Mais escolhido para primeira coleção" }
      ],
      cronogramaTitulo: "Cronograma — 4 semanas",
      cronograma: [
        { s: "Semana 1", t: "Mood, paleta, estampas autorais, aprovação tecidos" }, { s: "Semana 2", t: "Desenhos técnicos + fichas + tabela base" },
        { s: "Semana 3", t: "Graduação + mockups 3D + board aviamentos + Excel custos" }, { s: "Semana 4", t: "2 revisões incluídas + entrega final AI/PDF/DXF" }
      ],
      pagamento: { titulo: "Pagamento", valor: "50/50", texto: "50% para iniciar, 50% na entrega. Pix, Wise, PayPal." },
      revisoes: { titulo: "Revisões", valor: "2 incluídas", texto: "Ajustes finos de modelagem, cor, detalhe. Extra: US$ 120/h" },
      aviso: "Não inclui compra física de tecido em escala, produção industrial, frete internacional de piloto (cotado à parte).",
      footNota: "Excel custos assinado — adaptado pijamas $35-$60"
    },
    contact: {
      eyebrow: "10 / Próximos Passos + Contato", titulo: ["Vamos vestir", "sonhos bonitos?"],
      passos: [
        { n: "01", t: "Aprovação da proposta", d: "Assinatura digital abaixo + 50% inicial. Prazo: 4 semanas corridas a partir do pagamento." },
        { n: "02", t: "Kickoff — Briefing final", d: "Call 45min para alinhar tamanhos (XS-XXL ou S/M/L), tecidos preferidos, inspirações extras." },
        { n: "03", t: "Entrega e produção", d: "Arquivos prontos para sua confecção no Brasil. Suporte 14 dias pós-entrega." }
      ],
      linksTitulo: "Links Oficiais",
      linkPortfolio: { label: "Portfólio — 11 looks Collection / Tech Packs / Textiles", url: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection" },
      linkExcelDisp: "Disponível",
      linkExcel: "Excel custos assinado — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adaptado",
      contatoLabel: "Contato Direto", contatoNome: "Odelkis Dominguez", contatoCargo: "Founder & Lead Designer",
      contatoEndereco: ["De Moda KissOdel Studio", "Los Frailes, Santo Domingo Province", "República Dominicana"],
      contatoHandle: ["@demodakissodel", "Confidential 2026"],
      tempoLabel: "Tempo resposta", tempoResposta: "Até 12h • Seg-Sáb", idiomasLabel: "Idiomas", idiomas: "PT-BR • ES • EN",
      assinaturaLabel: "Assinatura e Aceite",
      assinaturaCliente: "Assinatura Cliente — Marca Própria Brasileira", assinaturaStudio: "De Moda KissOdel Studio — Odelkis Dominguez",
      dataLabel: "Data: ____ / ____ / 2026", validade: "Proposta válida por 15 dias • Confidencial"
    },
    footer: {
      copyright: "© 2026 De Moda KissOdel Studio — Los Frailes, Santo Domingo, República Dominicana — Todos os direitos reservados",
      valores: "Clássica • Sofisticada • Atemporal • Minimalista"
    }

  },
  /* ===================== ESPAÑOL (ES) ===================== */
  es: {
    marca: "DE MODA KISSODEL",
    tagline: "Colección Pijamas • Propuesta 2026",
    nav: [
      { id: "01", label: "Portada" }, { id: "02", label: "Estudio" }, { id: "03", label: "Concepto" },
      { id: "04", label: "Modelos" }, { id: "05", label: "Estampados" }, { id: "06", label: "Tejidos" },
      { id: "07", label: "Fichas" }, { id: "08", label: "Mockups" }, { id: "09", label: "Inversión" }, { id: "10", label: "Contacto" }
    ],
    hero: {
      etiqueta1: "Propuesta Exclusiva • 2026",
      etiqueta2: "Marca Propia Brasileña — Primera Colección",
      marcaMini: "DeModaKissOdel Studio",
      titulo: ["COLECCIÓN", "PIJAMAS", "FEMENINOS"],
      tags: ["Clásica", "Sofisticada", "Atemporal", "Minimalista"],
      refVisual: "3 conjuntos hero — satinado blanco, floral beige, burdeos minimalista",
      estudio: ["De Moda KissOdel Studio", "Odelkis Dominguez", "Los Frailes, Santo Domingo", "República Dominicana"],
      contato: ["@demodakissodel", "Fundadora & Diseñadora Principal", "Gold-stitched elegance", "Confidencial 2026"],
      frase: "Confort noble con acabado de alta costura"
    },
    about: {
      eyebrow: "02 / Sobre el Estudio", tituloTop: "Gold-stitched", tituloItalic: "elegance",
      parrafos: [
        "De Moda KissOdel es un estudio dominicano con obsesión por el acabado. Cada prenda se piensa como joya textil — mínima por fuera, impecable por dentro.",
        "Ubicación estratégica en Los Frailes, Santo Domingo, con acceso a producción artesanal de alto nivel y logística hacia Brasil y EE. UU."
      ],
      sistemaTitulo: "Sistema KO KISSODEL — aplicado a los pijamas",
      sistema: [
        { k: "Bordado KO", v: "1,5 cm hilo dorado #C9A86A, en el bolsillo superior izquierdo, punto lleno denso" },
        { k: "Botones", v: "Dorados mate, 4 orificios, 11 mm — mismo lote para toda la colección" },
        { k: "Acabado", v: "Costura francesa en todo el lateral, piping doble, ribete interno dorado" },
        { k: "Caída", v: "Patronaje pensado para el movimiento nocturno, sin tirar, sin marcar" }
      ],
      portfolioTitulo: "11 looks",
      portfolioTexto: "Collection / Tech Packs / Textiles — la misma estructura que usaremos para los pijamas, nivel internacional.",
      portfolioUrl: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection",
      portfolioCta: "Ver Portafolio",
      diferencialTitulo: "Diferencial RD",
      diferencial: "Mano de obra especializada en acabado francés, costo competitivo, producción piloto sin escala industrial obligatoria.",
      portfolioLabel: "Portafolio Validado"
    },
    concept: {
      eyebrow: "03 / Concepto y Estética", titulo: ["Clásica,", "sofisticada,", "atemporal."],
      parrafo1a: "Busco una estética clásica, sofisticada, atemporal, minimalista, con foco absoluto en ",
      parrafo1b: "confort, calidad, caída y acabados refinados.",
      parrafo1c: " Nada de excesos. Cada detalle tiene función y belleza.",
      parrafo2: "La colección está pensada para la mujer que duerme bien porque se viste bien — incluso en casa. Tacto de hotel 5 estrellas, caída de sastrería ligera.",
      pilares: [
        { n: "01", t: "Confort Noble", d: "Tejidos que respiran, elástico que no marca, patronaje que acompaña el cuerpo en movimiento. Noche entera sin ajustes." },
        { n: "02", t: "Caída Perfecta", d: "Hombro caído suave, pierna con ligero afinado, largo pensado para pie descalzo o con calcetín." },
        { n: "03", t: "Detalle Refinado", d: "Piping dorado de 3 mm, bolsillo funcional real, bordado KO discreto. Lujo silencioso." }
      ],
      inspiracaoTitulo: "Inspiración Directa",
      inspiracao: "Paleta validada: blanco satinado, beige floral, burdeos profundo",
      paleta: [
        { c: "#FFF8F0", l: "Blanco Satinado" }, { c: "#E8DCCF", l: "Beige Floral" },
        { c: "#4B0014", l: "Burdeos" }, { c: "#C9A86A", l: "Dorado KO" }
      ]
    },
    models: {
      eyebrow: "04 / Modelos Exclusivos", titulo: ["5 modelos", "esenciales"],
      intro: "Cada modelo con ficha completa, escalado y mockup. Bolsillos funcionales como firma — diferencial raro en pijamas femeninos premium.",
      badge: "Bolsillo funcional = diferencial competitivo",
      incluiLabel: "Incluye ficha + mockup + escalado",
      tecidoLabel: "Tejido:", detalheLabel: "Detalle:",
      lista: [
        { id: "01", nome: "Pijama Largo Abotonado con Bolsillos Funcionales", tecido: "Blanco Satinado 180gsm", detalhe: "Cuello camisero, botonadura dorada, 2 bolsillos de plastrón funcionales, piping oro", caimento: "Suelto elegante" },
        { id: "02", nome: "Conjunto Short Doll con Estampado de Autor", tecido: "Algodón Satinado — Floral Minimalista Beige", detalhe: "Top con tirante fino + short con elástico confort, bordado KO en el bolsillo", caimento: "Corto ligero" },
        { id: "03", nome: "Pijama Largo Minimalista", tecido: "Modal 160gsm — Burdeos #4B0014", detalhe: "Sin botones, escote V suave, elástico interno, acabado francés", caimento: "Fluido" },
        { id: "04", nome: "Camisón con Bolsillo", tecido: "Seda Mixta o Lino Mixto", detalhe: "Largo midi, abertura lateral sutil, bolsillo lateral invisible, ribete dorado", caimento: "Romántico minimal" },
        { id: "05", nome: "Conjunto Pantalón + Blusa Oversized", tecido: "Lino Mixto 14/m o Modal", detalhe: "Blusa oversized con puño, pantalón con cordón interno + bolsillo cuchillo funcional", caimento: "Loungewear chic" }
      ],
      extraLabel: "Extra opcional", extraTitulo: "6º modelo bajo consulta",
      extraTexto: "Bata corta con faja o conjunto cropped de verano. Mismo valor por modelo adicional: US$ 520."
    },
    prints: {
      eyebrow: "05 / Estampados de Autor y Patrones", titulo: ["Exclusividad", "que vende"],
      parrafo1: "2 a 3 estampados creados desde cero para tu marca. No es banco de estampados — es diseño de autor con repetición técnica perfecta para rodillo.",
      parrafo2a: "Derechos transferidos tras el pago final.", parrafo2b: " Recibes AI, PNG en alta y reporte de repetición.",
      repeticaoTitulo: "Patrón de Repetición Técnica",
      repeticaoTexto: "Repeat de 64x64 cm, encaje perfecto, 300 dpi. Probado en modal y algodón satinado. Aprobado para sublimación y rotativa.",
      estampas: [
        { nome: "Floral Minimalista Beige", desc: "Base de la foto hero. Flores pequeñas en trazo fino, fondo arena.", paleta: ["#EDE1D1", "#C9A86A", "#8B6A4F"] },
        { nome: "Micro-floral Rose", desc: "Variación romántica, botoncitos rosé desteñido, escala 1,2 cm.", paleta: ["#F5E8E2", "#D6A9A0", "#4B0014"] },
        { nome: "Liso con Piping Dorado", desc: "No es estampado, es detalle: liso + ribete oro 3 mm + bordado KO.", paleta: ["#FFF8F0", "#C9A86A", "#4B0014"] }
      ],
      bottomNota: "@demodakissodel — pg 05/10 • Derechos transferidos tras el pago",
      entregaveis: "AI + PNG 300dpi + Rapport"
    },
    fabrics: {
      eyebrow: "06 / Tejidos, Avios y Acabados", titulo: "Tacto que fideliza",
      intro: "Selección curada para Brasil — proveedores con entrega rápida, tacto premium y precio competitivo para un margen saludable.",
      tablaTitulo: "Tejidos Nobles — Tabla Base", tablaNota: "Valores referencia BR/USD",
      tecidos: [
        { tecido: "Algodón Satinado 180gsm", toque: "Fresco, brillo suave, transpirable", uso: "Modelo 01, 02", preco: "$12.50/m", largura: "1.50m" },
        { tecido: "Modal 160gsm", toque: "Suavidad extrema, buena caída, anti pilling", uso: "Modelo 03, 05", preco: "$11.00/m", largura: "1.80m" },
        { tecido: "Seda Mixta", toque: "Lujo ligero, fresco", uso: "Modelo 04", preco: "$18.00/m", largura: "1.40m" },
        { tecido: "Lino Mixto", toque: "Textura natural chic", uso: "Modelo 04, 05", preco: "$14.00/m", largura: "1.50m" }
      ],
      tablaPie: "* Precios de referencia mayorista Brasil, sin flete. Estimación consumo medio pijama largo: 2,8 m — short: 1,6 m — camisón: 2,2 m",
      aviamentosTitulo: "Avios",
      aviamentos: [
        { k: "Botones dorados #C9A86A", d: "Mate, 4 orificios, 11 mm — 8 unidades por pijama largo" },
        { k: "Ribete dorado", d: "Raso 12 mm, doble para piping 3 mm — acabado interno limpio" },
        { k: "Elástico confort", d: "3 cm, tacto melocotón, no se enrolla — cintura short y pantalón" },
        { k: "Etiqueta KO bordada", d: "Tafetán, dorado sobre off-white, 3x1,5 cm — nuca y lateral" }
      ],
      acabamentosTitulo: "Acabados — Firma KISSODEL",
      acabamentos: ["Costura francesa", "Piping doble", "Bolsillo funcional reforzado", "Dobladillo italiano 3 cm", "Ribete interno limpio"],
      acabamentosNota: "Mismo estándar del portafolio streetwear, adaptado a la delicadeza del sleepwear. Ningún overlock a la vista."
    },
    techpack: {
      eyebrow: "07 / Fichas Técnicas + Patronaje", titulo: ["Listo para", "Audaces / Lectra"],
      parrafos: [
        "Cada modelo con ficha técnica completa en el mismo estándar del portafolio — BOM, secuencia operativa, medidas base, tolerancias, acabados.",
        "Patronaje base en talla M + tabla + escalado XS-XXL (o S/M/L según tu preferencia).",
        "Archivos: AI editable + PDF print + DXF opcional."
      ],
      sistemaLabel: "Sistema", sistemaTexto: "BOM + Medidas + Construcción + Acabado — igual que el portafolio",
      fichaLabel: "Ejemplo de Formato — Ficha Técnica",
      fichaTitulo: "01 - Pijama Largo Abotonado con Bolsillos Funcionales",
      fichaRef: "Ref: PJ01-WH • Tejido: Algodón Satinado Blanco 180gsm • Colección: Primera",
      bomTitulo: "BOM — Bill of Materials",
      bom: [
        ["Tejido principal", "Algodón satinado blanco 180gsm", "2.8m"], ["Botones dorados", "Mate 11mm 4 orificios", "8 un"],
        ["Ribete dorado", "Raso 12mm → piping 3mm", "2.2m"], ["Hilo", "Poliéster 120, off-white + oro", "—"],
        ["Etiqueta", "KO bordada tafetán", "2 un"], ["Embalaje", "Bolsa satinada + tag oro", "1 kit"]
      ],
      sequenciaTitulo: "Secuencia de Construcción",
      sequencia: [
        "Cerrar hombros con costura francesa", "Aplicar piping dorado en cuello y tapeta", "Coser bolsillos funcionales de plastrón (refuerzo en esquina)",
        "Cerrar laterales con costura francesa", "Dobladillo italiano 3 cm + etiqueta lateral", "Ojalar y coser botones dorados",
        "Bordado KO 1,5 cm bolsillo izquierdo + control de calidad"
      ],
      medidasTitulo: "Tabla de Medidas — Base M",
      medidas: [
        ["Busto", "108cm", "+/-1"], ["Cintura", "106cm", "+/-1"], ["Cadera", "112cm", "+/-1"],
        ["Largo total", "78cm blusa / 102cm pantalón", "+/-0.8"], ["Ancho bolsillo", "13cm x 14cm", "funcional"]
      ],
      graduacaoLabel: "Escalado",
      graduacao: "XS-XXL automático — incremento 4 cm busto/cintura, 1,5 cm largo",
      graduacaoArquivos: "Archivos: AI + PDF + DXF compatible Audaces/Lectra",
      desenhoLabel: "Dibujo Técnico", desenhoTecnico: "Frente / Espalda / Detalle bolsillo + piping"
    },
    mockups: {
      eyebrow: "08 / Mockups Digitales y Pieza-Piloto", titulo: ["Ver antes", "de cortar"],
      etiquetaImg: "Mockups Digitales 3D", etiquetaImgSub: "Caída real — tejido, luz, pliegue",
      vistas: ["Frente", "Espalda", "Detalle bolsillo KO"],
      block1Titulo: "Mockups 3D Digitales",
      block1Texto: "De los 3 conjuntos de la imagen hero en alta resolución — frente, espalda, detalle. Simulación de tejido real: brillo del satinado, caída del modal, transparencia sutil de la seda mixta. Ideal para e-commerce, preventa y aprobación.",
      block2Titulo: "Pieza-Piloto Física — Opcional",
      block2TextoA: "Gestión completa en RD: compra de tejido local, corte, costura francesa, bordado KO, acabado, fotos. ",
      block2TextoB: "US$ 800 por modelo.", block2TextoC: " No incluye compra física de tejido a gran escala — solo piloto.",
      block2Nota: "Recibes video de construcción + fotos detalladas + ajustes anotados para la producción final en Brasil.",
      entregaveisLabel: "Entregables Mockup", entregaveisMockup: "PNG 4000px, fondo transparente + lifestyle, archivo CLO 3D opcional",
      tempoLabel: "Tiempo Piloto", tempoPiloto: "10-12 días hábiles tras aprobar los tejidos"
    },
    investment: {
      eyebrow: "09 / Inversión y Cronograma", titulo: ["Inversión", "clara, sin sorpresas"],
      refA: "Referencia validada: Excel de costos ya probado — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adaptado a pijamas.",
      refB1: "Costo prenda media streetwear: $65-$95", refB2: " → adaptado a pijamas: ", refB3: "$35-$60", refB4: " según el tejido, con margen saludable para premium.",
      pacotes: [
        { tipo: "STANDARD", modelos: "4-6 modelos", valor: "US$ 3,200", destaque: false,
          inclui: ["Mood + dirección creativa", "2-3 estampados de autor exclusivos", "Dibujos técnicos planos", "Fichas técnicas completas (BOM)", "Tabla de medidas + escalado XS-XXL", "Mockups 3D de caída real", "Board tejidos + avios", "Excel de costos adaptado a pijamas"] },
        { tipo: "PREMIUM con piloto físico", modelos: "4-6 modelos + piloto RD", valor: "US$ 4,800", destaque: true,
          inclui: ["Todo lo del Standard +", "Gestión de pieza-piloto física en RD", "Video de construcción + ajustes", "Fotos HD del piloto para producción BR", "Acompañamiento 2 semanas post-entrega"], selo: "El más elegido para la primera colección" }
      ],
      cronogramaTitulo: "Cronograma — 4 semanas",
      cronograma: [
        { s: "Semana 1", t: "Mood, paleta, estampados de autor, aprobación de tejidos" }, { s: "Semana 2", t: "Dibujos técnicos + fichas + tabla base" },
        { s: "Semana 3", t: "Escalado + mockups 3D + board de avios + Excel de costos" }, { s: "Semana 4", t: "2 revisiones incluidas + entrega final AI/PDF/DXF" }
      ],
      pagamento: { titulo: "Pago", valor: "50/50", texto: "50% para iniciar, 50% a la entrega. Pix, Wise, PayPal." },
      revisoes: { titulo: "Revisiones", valor: "2 incluidas", texto: "Ajustes finos de patronaje, color, detalle. Extra: US$ 120/h" },
      aviso: "No incluye compra física de tejido a escala, producción industrial ni flete internacional del piloto (se cotiza aparte).",
      footNota: "Excel de costos firmado — adaptado a pijamas $35-$60"
    },
    contact: {
      eyebrow: "10 / Próximos Pasos + Contacto", titulo: ["¿Vestimos", "sueños bonitos?"],
      passos: [
        { n: "01", t: "Aprobación de la propuesta", d: "Firma digital abajo + 50% inicial. Plazo: 4 semanas corridas desde el pago." },
        { n: "02", t: "Kickoff — Briefing final", d: "Call de 45 min para alinear tallas (XS-XXL o S/M/L), tejidos preferidos e inspiraciones extra." },
        { n: "03", t: "Entrega y producción", d: "Archivos listos para tu confección en Brasil. Soporte 14 días post-entrega." }
      ],
      linksTitulo: "Enlaces Oficiales",
      linkPortfolio: { label: "Portafolio — 11 looks Collection / Tech Packs / Textiles", url: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection" },
      linkExcelDisp: "Disponible",
      linkExcel: "Excel de costos firmado — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adaptado",
      contatoLabel: "Contacto Directo", contatoNome: "Odelkis Dominguez", contatoCargo: "Fundadora & Diseñadora Principal",
      contatoEndereco: ["De Moda KissOdel Studio", "Los Frailes, Santo Domingo Province", "República Dominicana"],
      contatoHandle: ["@demodakissodel", "Confidential 2026"],
      tempoLabel: "Tiempo de respuesta", tempoResposta: "Hasta 12 h • Lun-Sáb", idiomasLabel: "Idiomas", idiomas: "PT-BR • ES • EN",
      assinaturaLabel: "Firma y Aceptación",
      assinaturaCliente: "Firma Cliente — Marca Propia Brasileña", assinaturaStudio: "De Moda KissOdel Studio — Odelkis Dominguez",
      dataLabel: "Fecha: ____ / ____ / 2026", validade: "Propuesta válida por 15 días • Confidencial"
    },
    footer: {
      copyright: "© 2026 De Moda KissOdel Studio — Los Frailes, Santo Domingo, República Dominicana — Todos los derechos reservados",
      valores: "Clásica • Sofisticada • Atemporal • Minimalista"
    }

  },
  /* ===================== ENGLISH (EN) ===================== */
  en: {
    marca: "DE MODA KISSODEL",
    tagline: "Pajama Collection • 2026 Proposal",
    nav: [
      { id: "01", label: "Cover" }, { id: "02", label: "Studio" }, { id: "03", label: "Concept" },
      { id: "04", label: "Models" }, { id: "05", label: "Prints" }, { id: "06", label: "Fabrics" },
      { id: "07", label: "Tech Packs" }, { id: "08", label: "Mockups" }, { id: "09", label: "Investment" }, { id: "10", label: "Contact" }
    ],
    hero: {
      etiqueta1: "Exclusive Proposal • 2026",
      etiqueta2: "Brazilian Private Label — First Collection",
      marcaMini: "DeModaKissOdel Studio",
      titulo: ["WOMEN'S", "PAJAMA", "COLLECTION"],
      tags: ["Classic", "Sophisticated", "Timeless", "Minimalist"],
      refVisual: "3 hero sets — white satin, beige floral, minimalist burgundy",
      estudio: ["De Moda KissOdel Studio", "Odelkis Dominguez", "Los Frailes, Santo Domingo", "Dominican Republic"],
      contato: ["@demodakissodel", "Founder & Lead Designer", "Gold-stitched elegance", "Confidential 2026"],
      frase: "Noble comfort with haute-couture finishing"
    },
    about: {
      eyebrow: "02 / About the Studio", tituloTop: "Gold-stitched", tituloItalic: "elegance",
      parrafos: [
        "De Moda KissOdel is a Dominican studio obsessed with finishing. Every piece is designed like a textile jewel — minimal outside, flawless inside.",
        "Strategic location in Los Frailes, Santo Domingo, with access to high-end artisanal production and logistics to Brazil and the USA."
      ],
      sistemaTitulo: "KO KISSODEL System — applied to pajamas",
      sistema: [
        { k: "KO Embroidery", v: "1.5cm gold thread #C9A86A, placed on the upper-left pocket, dense satin stitch" },
        { k: "Buttons", v: "Matte gold, 4 holes, 11mm — same batch for the whole collection" },
        { k: "Finishing", v: "French seam along the full side, double piping, internal gold binding" },
        { k: "Fit", v: "Patternmaking designed for nighttime movement, no pulling, no marking" }
      ],
      portfolioTitulo: "11 looks",
      portfolioTexto: "Collection / Tech Packs / Textiles — the same structure we'll use for pajamas, international level.",
      portfolioUrl: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection",
      portfolioCta: "View Portfolio",
      diferencialTitulo: "DR Advantage",
      diferencial: "Skilled labor in French finishing, competitive cost, pilot production with no mandatory industrial scale.",
      portfolioLabel: "Validated Portfolio"
    },
    concept: {
      eyebrow: "03 / Concept & Aesthetic", titulo: ["Classic,", "sophisticated,", "timeless."],
      parrafo1a: "I pursue a classic, sophisticated, timeless, minimalist aesthetic, with absolute focus on ",
      parrafo1b: "comfort, quality, fit and refined finishing.",
      parrafo1c: " No excess. Every detail has function and beauty.",
      parrafo2: "The collection is designed for the woman who sleeps well because she dresses well — even at home. A 5-star hotel feel, light tailoring drape.",
      pilares: [
        { n: "01", t: "Noble Comfort", d: "Breathable fabrics, elastic that doesn't mark, patternmaking that follows the body in motion. All night with no adjustments." },
        { n: "02", t: "Perfect Fit", d: "Soft dropped shoulder, slightly tapered leg, length designed for bare feet or with socks." },
        { n: "03", t: "Refined Detail", d: "3mm gold piping, real functional pocket, discreet KO embroidery. Quiet luxury." }
      ],
      inspiracaoTitulo: "Direct Inspiration",
      inspiracao: "Validated palette: white satin, floral beige, deep burgundy",
      paleta: [
        { c: "#FFF8F0", l: "White Satin" }, { c: "#E8DCCF", l: "Floral Beige" },
        { c: "#4B0014", l: "Burgundy" }, { c: "#C9A86A", l: "KO Gold" }
      ]
    },
    models: {
      eyebrow: "04 / Exclusive Models", titulo: ["5 essential", "models"],
      intro: "Each model with a full spec sheet, grading and mockup. Functional pockets as a signature — a rare differentiator in premium women's sleepwear.",
      badge: "Functional pocket = competitive edge",
      incluiLabel: "Includes spec sheet + mockup + grading",
      tecidoLabel: "Fabric:", detalheLabel: "Detail:",
      lista: [
        { id: "01", nome: "Long Buttoned Pajama with Functional Pockets", tecido: "White Satin 180gsm", detalhe: "Shirt collar, gold buttoning, 2 functional patch pockets, gold piping", caimento: "Elegant loose" },
        { id: "02", nome: "Short Doll Set with Signature Print", tecido: "Satin Cotton — Minimalist Beige Floral", detalhe: "Thin-strap top + shorts with comfort elastic, KO embroidery on the pocket", caimento: "Light short" },
        { id: "03", nome: "Minimalist Long Pajama", tecido: "Modal 160gsm — Burgundy #4B0014", detalhe: "No buttons, soft V-neck, internal elastic, French finishing", caimento: "Fluid" },
        { id: "04", nome: "Nightgown with Pocket", tecido: "Blended Silk or Blended Linen", detalhe: "Midi length, subtle side slit, invisible side pocket, gold binding", caimento: "Romantic minimal" },
        { id: "05", nome: "Pants + Oversized Blouse Set", tecido: "Blended Linen 14/m or Modal", detalhe: "Oversized blouse with cuff, pants with internal drawstring + functional knife pocket", caimento: "Chic loungewear" }
      ],
      extraLabel: "Optional extra", extraTitulo: "6th model on request",
      extraTexto: "Short robe with sash or cropped summer set. Same price per additional model: US$ 520."
    },
    prints: {
      eyebrow: "05 / Signature Prints & Patterns", titulo: ["Exclusivity", "that sells"],
      parrafo1: "2 to 3 prints created from scratch for your brand. Not a stock print bank — original artwork with perfect technical repeat for roller printing.",
      parrafo2a: "Rights transferred after final payment.", parrafo2b: " You receive AI, high-res PNG and a repeat report.",
      repeticaoTitulo: "Technical Repeat Pattern",
      repeticaoTexto: "64x64cm repeat, perfect match, 300dpi. Tested on modal and satin cotton. Approved for sublimation and rotary printing.",
      estampas: [
        { nome: "Minimalist Beige Floral", desc: "Base of the hero photo. Tiny flowers in fine line, sand background.", paleta: ["#EDE1D1", "#C9A86A", "#8B6A4F"] },
        { nome: "Micro-floral Rose", desc: "Romantic variation, faded rosé buds, 1.2cm scale.", paleta: ["#F5E8E2", "#D6A9A0", "#4B0014"] },
        { nome: "Plain with Gold Piping", desc: "Not a print, a detail: plain + 3mm gold binding + KO embroidery.", paleta: ["#FFF8F0", "#C9A86A", "#4B0014"] }
      ],
      bottomNota: "@demodakissodel — pg 05/10 • Rights transferred after payment",
      entregaveis: "AI + PNG 300dpi + Repeat"
    },
    fabrics: {
      eyebrow: "06 / Fabrics, Trims & Finishing", titulo: "A feel that builds loyalty",
      intro: "A curated selection for Brazil — suppliers with fast delivery, premium feel and competitive pricing for a healthy margin.",
      tablaTitulo: "Noble Fabrics — Base Table", tablaNota: "Reference values BR/USD",
      tecidos: [
        { tecido: "Satin Cotton 180gsm", toque: "Cool, soft sheen, breathable", uso: "Model 01, 02", preco: "$12.50/m", largura: "1.50m" },
        { tecido: "Modal 160gsm", toque: "Extremely soft, great drape, anti-pilling", uso: "Model 03, 05", preco: "$11.00/m", largura: "1.80m" },
        { tecido: "Blended Silk", toque: "Light luxury, cool", uso: "Model 04", preco: "$18.00/m", largura: "1.40m" },
        { tecido: "Blended Linen", toque: "Chic natural texture", uso: "Model 04, 05", preco: "$14.00/m", largura: "1.50m" }
      ],
      tablaPie: "* Reference wholesale prices Brazil, freight not included. Average consumption estimate long pajama: 2.8m — shorts: 1.6m — nightgown: 2.2m",
      aviamentosTitulo: "Trims",
      aviamentos: [
        { k: "Gold buttons #C9A86A", d: "Matte, 4 holes, 11mm — 8 units per long pajama" },
        { k: "Gold binding", d: "12mm satin, doubled for 3mm piping — clean internal finish" },
        { k: "Comfort elastic", d: "3cm, peach touch, no roll — shorts and pants waist" },
        { k: "KO embroidered label", d: "Taffeta, gold on off-white, 3x1.5cm — nape and side" }
      ],
      acabamentosTitulo: "Finishing — KISSODEL Signature",
      acabamentos: ["French seam", "Double piping", "Reinforced functional pocket", "3cm Italian hem", "Clean internal binding"],
      acabamentosNota: "Same standard as the streetwear portfolio, adapted to the delicacy of sleepwear. No visible overlock."
    },
    techpack: {
      eyebrow: "07 / Tech Packs + Patternmaking", titulo: ["Ready for", "Audaces / Lectra"],
      parrafos: [
        "Each model with a full tech pack in the same portfolio standard — BOM, operational sequence, base measurements, tolerances, finishing.",
        "Base pattern in size M + table + XS-XXL grading (or S/M/L as you prefer).",
        "Files: editable AI + print PDF + optional DXF."
      ],
      sistemaLabel: "System", sistemaTexto: "BOM + Measurements + Construction + Finishing — same as portfolio",
      fichaLabel: "Format Example — Tech Pack",
      fichaTitulo: "01 - Long Buttoned Pajama with Functional Pockets",
      fichaRef: "Ref: PJ01-WH • Fabric: White Satin Cotton 180gsm • Collection: First",
      bomTitulo: "BOM — Bill of Materials",
      bom: [
        ["Main fabric", "White satin cotton 180gsm", "2.8m"], ["Gold buttons", "Matte 11mm 4 holes", "8 un"],
        ["Gold binding", "12mm satin → 3mm piping", "2.2m"], ["Thread", "Polyester 120, off-white + gold", "—"],
        ["Label", "KO embroidered taffeta", "2 un"], ["Packaging", "Satin bag + gold tag", "1 kit"]
      ],
      sequenciaTitulo: "Construction Sequence",
      sequencia: [
        "Close shoulders with French seam", "Apply gold piping on collar and placket", "Attach functional patch pockets (corner reinforcement)",
        "Close sides with French seam", "3cm Italian hem + side label", "Buttonhole and attach gold buttons",
        "KO embroidery 1.5cm left pocket + quality control"
      ],
      medidasTitulo: "Measurement Table — Base M",
      medidas: [
        ["Bust", "108cm", "+/-1"], ["Waist", "106cm", "+/-1"], ["Hip", "112cm", "+/-1"],
        ["Total length", "78cm top / 102cm pants", "+/-0.8"], ["Pocket width", "13cm x 14cm", "functional"]
      ],
      graduacaoLabel: "Grading",
      graduacao: "Automatic XS-XXL — 4cm bust/waist increment, 1.5cm length",
      graduacaoArquivos: "Files: AI + PDF + DXF compatible Audaces/Lectra",
      desenhoLabel: "Technical Drawing", desenhoTecnico: "Front / Back / Pocket + piping detail"
    },
    mockups: {
      eyebrow: "08 / Digital Mockups & Pilot Piece", titulo: ["See before", "you cut"],
      etiquetaImg: "3D Digital Mockups", etiquetaImgSub: "Real drape — fabric, light, fold",
      vistas: ["Front", "Back", "KO pocket detail"],
      block1Titulo: "3D Digital Mockups",
      block1Texto: "Of the 3 hero-image sets in high resolution — front, back, detail. Real fabric simulation: satin sheen, modal drape, subtle blended-silk transparency. Ideal for e-commerce, pre-sale and approval.",
      block2Titulo: "Physical Pilot Piece — Optional",
      block2TextoA: "Full management in DR: local fabric purchase, cutting, French seam, KO embroidery, finishing, photos. ",
      block2TextoB: "US$ 800 per model.", block2TextoC: " Does not include large-scale physical fabric purchase — pilot only.",
      block2Nota: "You receive a construction video + detailed photos + annotated adjustments for final production in Brazil.",
      entregaveisLabel: "Mockup Deliverables", entregaveisMockup: "PNG 4000px, transparent background + lifestyle, optional CLO 3D file",
      tempoLabel: "Pilot Timing", tempoPiloto: "10-12 business days after fabric approval"
    },
    investment: {
      eyebrow: "09 / Investment & Timeline", titulo: ["Investment", "clear, no surprises"],
      refA: "Validated reference: cost Excel already tested — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adapted for pajamas.",
      refB1: "Average streetwear piece cost: $65-$95", refB2: " → adapted for pajamas: ", refB3: "$35-$60", refB4: " depending on fabric, with a healthy premium margin.",
      pacotes: [
        { tipo: "STANDARD", modelos: "4-6 models", valor: "US$ 3,200", destaque: false,
          inclui: ["Mood + creative direction", "2-3 exclusive signature prints", "Flat technical drawings", "Full tech packs (BOM)", "Measurement table + XS-XXL grading", "Real-drape 3D mockups", "Fabric + trims board", "Cost Excel adapted for pajamas"] },
        { tipo: "PREMIUM with physical pilot", modelos: "4-6 models + DR pilot", valor: "US$ 4,800", destaque: true,
          inclui: ["Everything in Standard +", "Physical pilot-piece management in DR", "Construction video + adjustments", "HD pilot photos for BR production", "2-week post-delivery support"], selo: "Most chosen for a first collection" }
      ],
      cronogramaTitulo: "Timeline — 4 weeks",
      cronograma: [
        { s: "Week 1", t: "Mood, palette, signature prints, fabric approval" }, { s: "Week 2", t: "Technical drawings + spec sheets + base table" },
        { s: "Week 3", t: "Grading + 3D mockups + trims board + cost Excel" }, { s: "Week 4", t: "2 included revisions + final delivery AI/PDF/DXF" }
      ],
      pagamento: { titulo: "Payment", valor: "50/50", texto: "50% to start, 50% on delivery. Pix, Wise, PayPal." },
      revisoes: { titulo: "Revisions", valor: "2 included", texto: "Fine adjustments to pattern, color, detail. Extra: US$ 120/h" },
      aviso: "Does not include large-scale physical fabric purchase, industrial production, or international pilot shipping (quoted separately).",
      footNota: "Signed cost Excel — adapted for pajamas $35-$60"
    },
    contact: {
      eyebrow: "10 / Next Steps + Contact", titulo: ["Shall we dress", "beautiful dreams?"],
      passos: [
        { n: "01", t: "Proposal approval", d: "Digital signature below + 50% upfront. Timeline: 4 consecutive weeks from payment." },
        { n: "02", t: "Kickoff — Final briefing", d: "45-min call to align sizes (XS-XXL or S/M/L), preferred fabrics, extra inspirations." },
        { n: "03", t: "Delivery and production", d: "Files ready for your manufacturing in Brazil. 14-day post-delivery support." }
      ],
      linksTitulo: "Official Links",
      linkPortfolio: { label: "Portfolio — 11 looks Collection / Tech Packs / Textiles", url: "https://juntos-creator.github.io/demodakissodel-portafolio/#collection" },
      linkExcelDisp: "Available",
      linkExcel: "Signed cost Excel — DeModaKissOdel_Costing_Sheet_Streetwear_Capsule.xlsx adapted",
      contatoLabel: "Direct Contact", contatoNome: "Odelkis Dominguez", contatoCargo: "Founder & Lead Designer",
      contatoEndereco: ["De Moda KissOdel Studio", "Los Frailes, Santo Domingo Province", "Dominican Republic"],
      contatoHandle: ["@demodakissodel", "Confidential 2026"],
      tempoLabel: "Response time", tempoResposta: "Within 12h • Mon-Sat", idiomasLabel: "Languages", idiomas: "PT-BR • ES • EN",
      assinaturaLabel: "Signature & Acceptance",
      assinaturaCliente: "Client Signature — Brazilian Private Label", assinaturaStudio: "De Moda KissOdel Studio — Odelkis Dominguez",
      dataLabel: "Date: ____ / ____ / 2026", validade: "Proposal valid for 15 days • Confidential"
    },
    footer: {
      copyright: "© 2026 De Moda KissOdel Studio — Los Frailes, Santo Domingo, Dominican Republic — All rights reserved",
      valores: "Classic • Sophisticated • Timeless • Minimalist"
    }

  },
};
