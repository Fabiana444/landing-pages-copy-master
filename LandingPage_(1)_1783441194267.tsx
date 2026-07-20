import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Play, 
  Pause,
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Menu, 
  X, 
  Layers, 
  FileText, 
  BarChart3, 
  MousePointerClick, 
  Zap, 
  HelpCircle, 
  MessageSquare,
  ChevronRight,
  TrendingUp,
  ExternalLink,
  History,
  MessageCircle,
  FileSpreadsheet,
  HardDrive,
  Share2,
  FolderHeart,
  Database,
  Volume2,
  Bot,
  Laptop,
  Settings,
  Flame,
  Search,
  Send,
  RefreshCw,
  Trello,
  Slack,
  BookOpen
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideoDemo, setActiveVideoDemo] = useState<'copy' | 'campaign'>('copy');

  // Interactive Reports Mockup states
  const [mockupChartType, setMockupChartType] = useState<'bar' | 'line' | 'donut'>('bar');
  const [hoveredMockupBarIndex, setHoveredMockupBarIndex] = useState<number | null>(null);
  const [hoveredMockupLineIndex, setHoveredMockupLineIndex] = useState<number | null>(null);
  const [hoveredMockupDonutIndex, setHoveredMockupDonutIndex] = useState<number | null>(null);
  
  // Custom Media Player Simulator states
  const [isPlaying, setIsPlaying] = useState(true);
  const [demoProgress, setDemoProgress] = useState(0); // 0 to 100
  const [demoStep, setDemoStep] = useState(1);
  const [simulatedChatMessages, setSimulatedChatMessages] = useState<any[]>([]);
  const [simulatedCopyResult, setSimulatedCopyResult] = useState('');
  const [simulatedCampaignChannel, setSimulatedCampaignChannel] = useState('instagram');
  const [chatInputValue, setChatInputValue] = useState('');
  const [simulatedStatusText, setSimulatedStatusText] = useState('Pronto para gerar');

  // Copy generation simulated texts
  const baseCopyText = `**[TÍTULO]**
O Fim do Bloqueio Criativo: Como Gerar Conteúdo de Alto Impacto para Até 13 Canais Simultaneamente! 🚀

**[PROBLEMA]**
Você gasta horas olhando para uma tela em branco tentando criar o post perfeito para o Instagram, o roteiro do próximo vídeo ou um e-mail que realmente venda? No mercado digital atual, a inconsistência é o caminho mais rápido para o esquecimento. Produzir conteúdo amador ou genérico só serve para queimar o seu orçamento e afastar os clientes qualificados que deveriam estar comprando de você.

**[AGITAÇÃO]**
A pressão para estar presente em todos os canais de forma consistente é esmagadora. Se você foca no Instagram, o blog fica abandonado. Se tenta escrever um artigo de SEO, não tem tempo para criar e-mails frios de alta conversão. Esse ciclo exaustivo faz com que agências e freelancers fiquem travados, sem escala, reféns de uma rotina operacional massacrante que impede o crescimento real do negócio.

**[SOLUÇÃO]**
O **DocSpace Copy Master** é a chave de ouro para destravar sua produção de conteúdo. Com uma única inteligência artificial altamente calibrada pelas mentes mais brilhantes do copywriting nacional, você insere um briefing rápido e gera peças completas e prontas para uso em segundos. Do e-mail de vendas à estratégia completa de Growth Hack, tudo sincronizado e adaptado ao tom de voz perfeito da sua marca.

**[CTA]**
Não deixe mais dinheiro na mesa. Clique no botão abaixo para testar gratuitamente agora e experimente o poder da escala automatizada com controle criativo total!`;

  const adjustedCopyText = `🔥 **[URGENTE: PARE DE QUEIMAR TEMPO E DINHEIRO AGORA!]** 🔥
O mercado digital não perdoa o amadorismo. Quem continua insistindo em copys frias, robóticas e genéricas está simplesmente financiando os anúncios e o império dos concorrentes. É hora de tomar uma atitude drástica!

💥 **[PROBLEMA DETECTADO]**
A sua marca não está vendendo porque falta energia, falta urgência e falta a estrutura persuasiva que ative a dopamina imediata no cérebro do comprador. Enquanto você perde noites de sono tentando adivinhar o que escrever, seus concorrentes estão escalando o funil de vendas usando inteligência tática avançada de altíssima conversão.

⚡ **[A AGITAÇÃO DO MERCADO]**
Ficar limitado a apenas uma rede social ou tentar escrever manualmente para dezenas de canais diferentes é um suicídio operacional. Sua equipe está cansada, suas taxas de abertura de e-mail estão desabando e os custos por lead continuam subindo sem controle. Se você não mudar de nível hoje, amanhã seu negócio estará obsoleto.

🛡️ **[A SOLUÇÃO REVOLUCIONÁRIA]**
Com o **DocSpace Copy Master**, você assume as rédeas do seu marketing de escala. Escreva artigos de blog impecáveis de 10 mil caracteres, posts magnéticos para redes sociais com carrosséis estruturados e sequências completas de e-mails em minutos. Tudo re-calibrado pelo melhor copywriter do mercado digital com ganchos ultra agressivos que convertem cliques em faturamento real.

🚀 **[CHAMADA PARA AÇÃO IMEDIATA]**
As vagas para o plano VIP são extremamente limitadas! Clique agora no link abaixo, garanta seu acesso premium vitalício e mude para sempre o patamar das suas conversões antes que seus concorrentes façam isso por você! ⚡`;

  // Mouse pointer simulation coordinates mapping based on progress
  const cursorCoords = useMemo(() => {
    if (!isPlaying) return null;
    
    if (activeVideoDemo === 'copy') {
      // Step 1: moving to next button at the bottom of left panel
      if (demoProgress >= 11 && demoProgress < 18) {
        return { x: '25%', y: '58%' }; 
      }
      // Step 2: moving to next button
      if (demoProgress >= 29 && demoProgress < 36) {
        return { x: '25%', y: '62%' };
      }
      // Step 3: moving to next button
      if (demoProgress >= 47 && demoProgress < 54) {
        return { x: '25%', y: '68%' };
      }
      // Step 4: moving to Gerar button
      if (demoProgress >= 64 && demoProgress < 70) {
        return { x: '25%', y: '72%' };
      }
      // Step 5: moving to chat send button
      if (demoProgress >= 82 && demoProgress < 89) {
        return { x: '35%', y: '90%' };
      }
    } else {
      // Campaign mode clicks
      if (demoProgress >= 11 && demoProgress < 18) {
        return { x: '45%', y: '55%' };
      }
      if (demoProgress >= 29 && demoProgress < 36) {
        return { x: '45%', y: '60%' };
      }
      if (demoProgress >= 47 && demoProgress < 54) {
        return { x: '45%', y: '64%' };
      }
      if (demoProgress >= 64 && demoProgress < 70) {
        return { x: '50%', y: '75%' };
      }
      // Tab switches in Step 5
      if (demoProgress >= 72 && demoProgress < 77) {
        return { x: '25%', y: '36%' }; // Instagram tab
      }
      if (demoProgress >= 80 && demoProgress < 85) {
        return { x: '25%', y: '46%' }; // Email tab
      }
      if (demoProgress >= 88 && demoProgress < 93) {
        return { x: '25%', y: '56%' }; // LP tab
      }
    }
    return null;
  }, [demoProgress, activeVideoDemo, isPlaying]);

  // Simulator loop effect
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setDemoProgress((prev) => {
          const next = prev + 1.2;
          if (next >= 100) {
            // Reset loop
            setDemoStep(1);
            setSimulatedChatMessages([]);
            setSimulatedCopyResult('');
            setChatInputValue('');
            setSimulatedStatusText('Pronto para iniciar a simulação passo a passo');
            return 0;
          }
          
          // Step transition calculations for Copy Generator (4-Step Wizard + Interactive Chat)
          if (activeVideoDemo === 'copy') {
            if (next <= 18) {
              setDemoStep(1); // Passo 1: Produto e Público
              setSimulatedStatusText('Passo 1/4: Usuário preenche Marca/Produto e define Público-Alvo...');
              setSimulatedCopyResult('');
              setSimulatedChatMessages([]);
              setChatInputValue('');
            } else if (next > 18 && next <= 36) {
              setDemoStep(2); // Passo 2: Objetivo e Canal
              setSimulatedStatusText('Passo 2/4: Usuário escolhe Objetivo comercial e Canal principal...');
            } else if (next > 36 && next <= 54) {
              setDemoStep(3); // Passo 3: Tom e Formato
              setSimulatedStatusText('Passo 3/4: Usuário seleciona o Tom Persuasivo e o Framework AIDA...');
            } else if (next > 54 && next <= 70) {
              setDemoStep(4); // Passo 4: Confirmar e Gerar
              setSimulatedStatusText('Passo 4/4: Usuário revisa o briefing e clica em "Gerar Copy Master"...');
            } else if (next > 70) {
              setDemoStep(5); // Passo 5: Geração de Copy e Chat de Ajuste
              
              // Handle progressive text and chat typing
              if (next > 70 && next <= 82) {
                setSimulatedStatusText('IA Redigindo: Escrevendo copy inicial persuasiva de alta conversão...');
                // Stream initial copy characters
                const percentStream = (next - 70) / 12;
                const charsToShow = Math.floor(percentStream * baseCopyText.length);
                setSimulatedCopyResult(baseCopyText.substring(0, charsToShow));
                if (simulatedChatMessages.length === 0) {
                  setSimulatedChatMessages([
                    { role: 'model', text: 'Olá! Analisei seu briefing e criei uma Copy altamente persuasiva baseada no modelo AIDA. Deseja realizar algum ajuste ou refinamento?' }
                  ]);
                }
              } else if (next > 82 && next <= 90) {
                setSimulatedStatusText('Refinando via Chat: Usuário digita pedido de alteração no chat...');
                setSimulatedCopyResult(baseCopyText);
                // Type input in chat
                const inputPhrase = 'Deixe o tom mais urgente com emojis de fogo! 🔥';
                const percentType = (next - 82) / 8;
                const charsInput = Math.floor(percentType * inputPhrase.length);
                setChatInputValue(inputPhrase.substring(0, charsInput));
              } else if (next > 90) {
                setSimulatedStatusText('Copy Refinada: IA reescreve o texto adicionando urgência e emojis!');
                setChatInputValue('');
                if (simulatedChatMessages.length === 1) {
                  setSimulatedChatMessages([
                    { role: 'model', text: 'Olá! Analisei seu briefing e criei uma Copy altamente persuasiva baseada no modelo AIDA. Deseja realizar algum ajuste ou refinamento?' },
                    { role: 'user', text: 'Deixe o tom mais urgente com emojis de fogo! 🔥' },
                    { role: 'model', text: 'Entendido! Re-estruturei a copy aplicando urgência extrema e inserindo os emojis solicitados para prender a atenção do feed instantaneamente. Veja a nova versão editada ao lado!' }
                  ]);
                }
                const percentStreamAdj = (next - 90) / 10;
                const charsAdj = Math.floor(percentStreamAdj * adjustedCopyText.length);
                setSimulatedCopyResult(adjustedCopyText.substring(0, Math.max(charsAdj, 120)));
              }
            }
          } else {
            // Campaign Mode steps (Multichannel Integrated)
            if (next <= 18) {
              setDemoStep(1); // Passo 1: Informações da Campanha
              setSimulatedStatusText('Passo 1/4: Usuário digita o Nome do Cliente e a Vertical de Atuação...');
            } else if (next > 18 && next <= 36) {
              setDemoStep(2); // Passo 2: Canais e Frequência
              setSimulatedStatusText('Passo 2/4: Usuário seleciona Frequência e ativa múltiplos canais...');
            } else if (next > 36 && next <= 54) {
              setDemoStep(3); // Passo 3: Tom e Instruções
              setSimulatedStatusText('Passo 3/4: Usuário define o Tom de voz e insere notas do produto...');
            } else if (next > 54 && next <= 70) {
              setDemoStep(4); // Passo 4: Confirmar e Gerar lote
              setSimulatedStatusText('Passo 4/4: Usuário clica em "Gerar Lote de Campanha" para sintonizar...');
            } else if (next > 70) {
              setDemoStep(5); // Passo 5: Visualizar canais sincronizados
              setSimulatedStatusText('Lote Gerado: Usuário clica nas abas para conferir as peças consistentes!');
              // Auto-switch tabs to show real interaction with different results
              if (next > 70 && next <= 77) {
                setSimulatedCampaignChannel('instagram');
              } else if (next > 77 && next <= 85) {
                setSimulatedCampaignChannel('email');
              } else if (next > 85 && next <= 93) {
                setSimulatedCampaignChannel('landing_page');
              } else {
                setSimulatedCampaignChannel('tiktok');
              }
            }
          }

          return next;
        });
      }, 160);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeVideoDemo, simulatedChatMessages.length]);

  // Handle manual tab switch in video simulator
  const handleSwitchVideoDemo = (type: 'copy' | 'campaign') => {
    setActiveVideoDemo(type);
    setDemoProgress(0);
    setDemoStep(1);
    setSimulatedChatMessages([]);
    setSimulatedCopyResult('');
    setChatInputValue('');
    setSimulatedStatusText('Pronto para gerar');
  };

  const simulatedCampaignContent: Record<string, { title: string, body: string, img: string, bullets: string[] }> = {
    instagram: {
      title: 'Post Orgânico - Instagram (Storytelling & Carrossel)',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60',
      body: `📸 **ROTEIRO DO CARROSSEL DE ENGAJAMENTO (SLIDE A SLIDE):**

* **Slide 1: Capa (Título de Impacto)**: 
  [TEXTO NA IMAGEM]: "Sua Fábrica de Conteúdo Multicanal em Segundos! 🚀"
  [APOIO]: Do briefing a 13 canais sintonizados em menos de 1 minuto com IA.

* **Slide 2: A Grande Dor (Problema)**: 
  [TEXTO NA IMAGEM]: "O Custo Oculto da Tela em Branco 🤯"
  [APOIO]: Passar horas tentando criar posts, e-mails e páginas de vendas do zero drena sua criatividade e limita o crescimento do seu negócio.

* **Slide 3: O Impacto Oculto (Agitação)**: 
  [TEXTO NA IMAGEM]: "Inconsistência = Perder Vendas Diárias 📉"
  [APOIO]: Estar presente apenas em um canal faz sua marca cair no esquecimento. Tentar fazer tudo manualmente é exaustivo e sem escala.

* **Slide 4: A Revelação (Solução)**: 
  [TEXTO NA IMAGEM]: "DocSpace Copy Master: Escala Real ⚡"
  [APOIO]: Um único briefing estratégico inteligente gera copies perfeitamente calibradas e adaptadas para todos os seus canais em 4 passos simples.

* **Slide 5: Chamada de Ação (CTA)**: 
  [TEXTO NA IMAGEM]: "Quer Escalar Suas Criações Grátis? 👉"
  [APOIO]: Leia a legenda completa e mude seu ritmo editorial hoje mesmo!

---

📝 **LEGENDA COMPLETA DO POST (ALTAMENTE PERSUASIVA):**

Você gasta horas olhando para uma tela em branco tentando adivinhar qual é o post perfeito para o feed do Instagram, a próxima thread do Twitter ou aquela sequência fria de e-mails? No mercado digital dinâmico de hoje, a inconsistência editorial é o caminho mais rápido para ser esquecido pelo seu cliente.

A pressão para produzir conteúdos altamente persuasivos e adaptados ao tom de voz ideal da sua marca é sufocante. Se você foca na criação de artigos de blog, seu Instagram fica abandonado. Se tenta focar em anúncios, seus e-mails frios de cold outreach esfriam. É uma rotina exaustiva que impede agências, freelancers e criadores de crescerem de verdade.

Chega de improviso operacional. O **DocSpace Copy Master** utiliza inteligência artificial de ponta treinada com os melhores frameworks de copywriting do mundo para criar régua de conteúdos consistente em até 13 canais de forma simultânea. Do e-mail de fechamento ao roteiro do TikTok, tudo perfeitamente unificado e sintonizado com sua identidade de marca!

Além disso, tenha total flexibilidade para refinar cada detalhe através do nosso chat inteligente e salve o resultado diretamente nas suas ferramentas prediletas: Notion, Google Drive, Sheets, Trello ou Slack!

⚡ Comece hoje mesmo de forma 100% gratuita no link da nossa bio e destrave seu crescimento omnichannel!`,
      bullets: ['Sugerido: Carrossel gráfico minimalista com fundo pastel e fontes display elegantes.', 'Formato: Carrossel de 5 Slides + Legenda Longa', 'Gatilho: Prova Social & Escassez']
    },
    email: {
      title: 'E-mail Frio de Conversão (Sequência Master de Prospecção)',
      img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=500&auto=format&fit=crop&q=60',
      body: `💌 **ESTRUTURA COMPLETA DE E-MAIL (OUTREACH PERSUASIVO):**

**[LINHA DE ASSUNTO DE ALTA TAXA DE ABERTURA]:**
- Opção 1 (Curiosidade): 13 canais de marketing sintonizados de uma só vez (sem redatores caros)
- Opção 2 (Gancho de Escala): Como agências estão escalando a produção de copy em até 10x sem perder a alma da marca
- Opção 3 (Direto): Uma cópia para cada canal de vendas em 4 passos rápidos?

---

Olá, líder de marketing,

Se você ou sua equipe gastam noites de sono tentando adivinhar as palavras certas para convencer seus leads, provavelmente já percebeu o quão frustrante é manter a consistência em múltiplos pontos de contato ao mesmo tempo. No marketing digital moderno, se você falha em se comunicar de forma Omnichannel, seus concorrentes assumem a liderança.

O maior erro de agências e criadores autônomos é tentar escrever de forma manual e isolada. O resultado? Textos genéricos, e-mails frios e desalinhados que apenas queimam seu orçamento de tráfego.

Com o **DocSpace Copy Master**, você reverte esse cenário imediatamente. Através de um briefing rápido, nossa IA gera régua de conteúdos consistentes para até 13 canais simultâneos, incluindo:
1. Landing pages de alta conversão prontas para rodar;
2. Posts de redes sociais (Instagram, LinkedIn, Facebook) com carrosséis e hashtags;
3. Roteiros de vídeos curtos virais no TikTok e Reels;
4. E-mails estratégicos de conversão.

Seus textos são criados sob medida para o seu público-alvo com gatilhos de alto impacto, prontos para serem salvos ou copiados diretamente para o Notion, Slack, Trello, Google Drive ou Sheets em poucos cliques.

Que tal ver a nossa inteligência criar uma copy perfeita para o seu principal produto ao vivo em uma rápida demonstração?

👉 Clique aqui para agendar uma conversa curta de 10 minutos com o nosso especialista e ganhe créditos bônus para começar!`,
      bullets: ['Sugerido: Envio em formato texto puro, focado em alta entregabilidade na caixa principal.', 'Formato: Sequência de Cold Mail Curto', 'Gatilho: Reciprocidade & Facilidade']
    },
    landing_page: {
      title: 'Copy para Página de Vendas (Landing Page de Conversão)',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60',
      body: `🖥️ **ESTRUTURA DE COPY DA LANDING PAGE DE ALTA CONVERSÃO:**

**1. [HEADLINE PRINCIPAL]**:
"Gere Campanhas Coordenadas para até 13 Canais de Marketing Simultaneamente em Menos de 1 Minuto!"

**2. [SUB-HEADLINE (APOIO EDITORIAL)]**:
"Utilize inteligência tática calibrada para estruturar toda a sua comunicação de marca — de redes sociais a páginas de vendas e e-mails frios. Preencha o briefing, escolha seu tom e gere conteúdos consistentes em 4 passos simples, com controle criativo total."

**3. [SEÇÃO DE DOR / STORYTELLING]**:
Criar conteúdos persuasivos para múltiplos canais de vendas é exaustivo. Você passa o dia pulando de aba em aba, escrevendo legendas sem alma no Instagram, e-mails frios ignorados e anúncios que apenas consomem o seu orçamento sem gerar cliques. A falta de consistência omnichannel está sabotando o ritmo de vendas do seu negócio hoje.

**4. [BENEFÍCIOS E ENTREGÁVEIS PRINCIPAIS]**:
- **Consistência Absoluta:** Suas mensagens de marca alinhadas em todas as redes de forma simétrica.
- **Eficiência Sem Limites:** Gere copies profissionais completas em segundos, poupando até 30 horas de trabalho semanal.
- **Multi-Formato com Exportação:** Copie e salve o resultado de forma imediata no Google Docs, Sheets, Notion, Trello ou Slack.
- **Ajustes Infinitos por Chat:** Modifique, adicione emojis e recalibre o tom conversando diretamente com nosso assistente de IA.

**5. [PERGUNTAS FREQUENTES (FAQPersuasivo)]**:
- *Como o tom de voz é garantido para cada canal?* Nossa IA foi programada com regras estritas de copy para cada rede, adaptando ganchos para o feed profissional do LinkedIn, a dinâmica curta do TikTok ou a seriedade de um e-mail B2B.
- *Posso integrar minhas ferramentas de trabalho?* Sim! Você consegue exportar todos os resultados para Notion, Google Drive, Sheets, Trello, Slack e arquivos DOCX, HTML ou CSV com um único clique.

🚀 **[CTA PRINCIPAL]**:
"Quero Testar o DocSpace Copy Master Agora com Créditos Gratuitos!"`,
      bullets: ['Sugerido: Seções com fundos alternados em off-white e carvão para maximizar o escaneamento visual.', 'Formato: Landing Page Estruturada', 'Gatilho: Autoridade & Quebra de Objeções']
    },
    tiktok: {
      title: 'Roteiro de Vídeo Curto - TikTok / Reels / Shorts',
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=60',
      body: `🎬 **SCRIPT DE VÍDEO VERTICAL COM ALTA TAXA DE RETENÇÃO (30-45s):**

* **[0-3 seg] GANCHO DE ATENÇÃO IMEDIATO**:
  - *CENA:* Closeup de uma pessoa com cara de desespero batendo com a testa na mesa na frente de um computador com o cursor piscando em uma tela em branco. Texto piscando: "Escrever copy na mão em 2026? 💀"
  - *FALA (VOZ ENÉRGICA EM OFF):* "Se você ainda passa horas travado escrevendo posts de rede social ou e-mails do zero, você está implorando para ficar para trás!"

* **[3-15 seg] EXPOSIÇÃO DA DOR CRÍTICA**:
  - *CENA:* A câmera afasta mostrando o cansaço da pessoa enquanto várias abas de redes sociais (Instagram, LinkedIn, Blog) aparecem empilhadas na tela.
  - *FALA:* "Tentar manter a consistência em 13 canais ao mesmo tempo é impossível sem uma equipe gigante. Você foca em um, abandona o outro e seu alcance orgânico cai para quase zero."

* **[15-25 seg] APRESENTAÇÃO DA REVOLUÇÃO (SOLUÇÃO)**:
  - *CENA:* A pessoa abre o site do **DocSpace Copy Master**, digita um briefing simples em 3 linhas e clica em gerar. Imediatamente surgem dezenas de copies perfeitas e prontas ao lado.
  - *FALA:* "Para reverter isso, você só precisa de 1 briefing simples. O DocSpace gera toda a sua campanha integrada de uma vez só, adaptando o formato exato para cada mídia. De e-mails a carrosséis com roteiro slide a slide!"

* **[25-35 seg] CHAMADA PARA AÇÃO VIRAL (CTA)**:
  - *CENA:* Closeup da pessoa sorrindo, apontando para o link destacado na tela com ícones de exportação (Sheets, Drive, Notion).
  - *FALA:* "E você ainda exporta tudo pro Notion, Drive ou Sheets num clique. Comenta a palavra 'ESCALA' que eu te envio o acesso gratuito agora no seu direct!"

* **[EDIÇÃO & ÁUDIO]:**
  - Música de fundo: Tendência pop eletrônica rápida de baixa frequência (estilo Synthwave).
  - Legendas: Palavras coloridas de alto contraste (amarelo e verde) piscando no centro da tela para maximizar a retenção.`,
      bullets: ['Sugerido: Formato 9:16 vertical gravado em estilo dinâmico com cortes rápidos de 1.5s.', 'Formato: Script de Vídeo Curto Viral', 'Gatilho: Novidade & Prova de Escala']
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-[#1F1E1B] selection:bg-indigo-100 selection:text-indigo-950 font-sans antialiased overflow-x-hidden">
      
      {/* Editorial Header */}
      <header className="border-b border-stone-200/50 bg-white/95 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-3 sm:py-0 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:h-20 flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-display font-black text-xl tracking-tight text-stone-900 flex items-center">
                <span>Doc</span>
                <span className="text-[#6366F1]">Space</span>
                <span className="w-[3px] h-4.5 bg-[#6366F1] ml-1 animate-blink inline-block shrink-0 rounded-sm"></span>
                <span className="text-stone-300 font-normal mx-1.5 select-none">|</span>
                <span className="text-stone-900 font-black">CopyMaster</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold text-stone-600 lg:ml-12">
              <a href="#features" className="hover:text-indigo-600 transition">Recursos</a>
              <a href="#demo" className="hover:text-indigo-600 transition">Demonstração Interativa</a>
              <a href="#channels" className="hover:text-indigo-600 transition">Canais & Parametrização</a>
              <a href="#integrations" className="hover:text-indigo-600 transition">Integrações</a>
              <a href="#pricing" className="hover:text-indigo-600 transition">Preços do Painel</a>
              <a href="#faq" className="hover:text-indigo-600 transition">Dúvidas & Regras</a>
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={onLogin}
                className="text-xs font-extrabold text-stone-600 hover:text-indigo-600 transition cursor-pointer px-4 py-2"
              >
                Entrar
              </button>
              <button
                onClick={onGetStarted}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-sm transition hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Começar Grátis
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 transition"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden w-full bg-white border-t border-stone-250"
            >
              <div className="p-4 space-y-3 flex flex-col text-sm font-bold text-stone-600">
                <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Recursos</a>
                <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Demonstração</a>
                <a href="#channels" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Canais & Parâmetros</a>
                <a href="#integrations" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Integrações</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Planos</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-indigo-600 transition">Dúvidas & Regras</a>
                <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onLogin(); }}
                    className="w-full text-center py-2.5 px-4 text-xs font-bold text-stone-600 border border-stone-200 rounded-xl"
                  >
                    Fazer Login
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onGetStarted(); }}
                    className="w-full text-center py-2.5 px-4 text-xs font-bold text-white bg-indigo-600 rounded-xl"
                  >
                    Começar Grátis
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-stone-50/50 to-white overflow-hidden border-b border-stone-200/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-br from-indigo-100/30 to-violet-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 border border-indigo-150 bg-indigo-50/60 rounded-full text-[11px] font-extrabold text-[#6366F1] uppercase tracking-wider mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inteligência de Vendas de Última Geração (v2.4)</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-black tracking-tight text-stone-900 max-w-4xl mx-auto leading-[1.08] mb-6">
            Gere textos e <span className="text-[#6366F1]">campanhas multicanais</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-stone-650 max-w-2.5xl mx-auto font-medium leading-relaxed mb-10">
            Em poucos minutos a IA cria conteúdos personalizados para a linguagem de até 13 canais, a partir do seu briefing. Sem bloqueio criativo: gere, confira e use o chat com a IA sempre que quiser mudar qualquer conteúdo de forma ágil e inteligente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm py-4 px-8 rounded-2xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Começar Grátis Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-stone-250 hover:bg-stone-50 text-stone-750 font-extrabold text-sm py-4 px-8 rounded-2xl shadow-sm transition cursor-pointer"
            >
              <Play className="w-4 h-4 text-indigo-550 fill-indigo-500" />
              <span>Ver Simulador em Vídeo</span>
            </a>
          </div>

          {/* Main Highlights / Stats Bento Grid */}
          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                icon: <Zap className="w-5 h-5 text-indigo-600" />,
                badge: "VELOCIDADE",
                metric: "< 3 Segundos",
                title: "Geração instantânea de conteúdo",
                desc: "Sua copy fica pronta em tempo recorde através de modelos otimizados de IA, eliminando qualquer bloqueio criativo."
              },
              {
                icon: <Layers className="w-5 h-5 text-indigo-600" />,
                badge: "OMNICHANNEL",
                metric: "13 Canais",
                title: "Linguagem e formato adaptados",
                desc: "Textos perfeitamente calibrados para mídias específicas como Instagram, TikTok, LinkedIn, anúncios e e-mails frios."
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-indigo-600" />,
                badge: "FLEXIBILIDADE",
                metric: "Ajuste Ilimitado",
                title: "Refinamento dinâmico via Chat",
                desc: "Modifique, adapte o tom ou peça novas headlines para a IA diretamente no chat inteligente, sem gastar mais créditos por isso."
              },
              {
                icon: <History className="w-5 h-5 text-indigo-600" />,
                badge: "MÚLTIPLOS TEXTOS",
                metric: "Campanha Completa",
                title: "Planejamento estruturado em lote",
                desc: "Gere régua semanal coordenada de conteúdo multicanais de uma só vez, a partir de um único briefing estratégico."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-2xl bg-indigo-50 border border-indigo-100/40 text-[#6366F1]">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full font-mono">
                      {item.badge}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-2xl font-display font-black text-stone-900 tracking-tight">{item.metric}</p>
                    <h4 className="text-xs font-black text-stone-800 tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Platform Demo Section (Pendo.io Style) */}
      <section id="demo" className="py-16 md:py-24 bg-stone-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-wider">
              DEMONSTRAÇÃO DO PRODUTO EM AÇÃO
            </span>
            <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 mt-4">
              Assista à nossa Inteligência gerando na prática
            </h2>
            <p className="text-stone-500 text-sm font-medium mt-3">
              Não compre às cegas. Escolha uma das demonstrações interativas abaixo no estilo vídeo animado para ver a IA preencher parâmetros avançados, gerar em lote e realizar ajustes automáticos via chat.
            </p>
          </div>

          {/* Toggle Tabs styled like Pendo.io */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 max-w-2xl mx-auto">
            <button
              onClick={() => handleSwitchVideoDemo('copy')}
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
                activeVideoDemo === 'copy'
                  ? 'bg-white border-indigo-150 text-[#6366F1] shadow-sm ring-4 ring-indigo-500/5'
                  : 'bg-stone-100/80 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Geração de Copy & Chat de Ajuste</span>
            </button>
            <button
              onClick={() => handleSwitchVideoDemo('campaign')}
              className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-extrabold border transition-all cursor-pointer ${
                activeVideoDemo === 'campaign'
                  ? 'bg-white border-indigo-150 text-[#6366F1] shadow-sm ring-4 ring-indigo-500/5'
                  : 'bg-stone-100/80 border-stone-200 text-stone-600 hover:bg-stone-100'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Campanha Sintonizada de Múltiplos Canais</span>
            </button>
          </div>

          {/* Simulated Interactive Video Screen Mockup */}
          <div className="bg-white rounded-3xl border border-stone-250 shadow-2xl overflow-hidden max-w-5xl mx-auto font-sans relative">
            
            {/* Window Header */}
            <div className="bg-stone-50 border-b border-stone-200 px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="ml-4 text-[10px] font-mono font-medium text-stone-400 bg-stone-200/50 px-3 py-1 rounded-md">
                  {activeVideoDemo === 'copy' ? 'copymaster.docspace.tec.br/gerador-de-copy' : 'copymaster.docspace.tec.br/campanhas-multicanais'}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-[9px] font-black tracking-widest text-[#6366F1] uppercase bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                VÍDEO DE DEMO SIMULADO
              </div>
            </div>

            {/* Video Canvas and Progress bar */}
            <div className="bg-[#FAF9F5] p-5 md:p-8 min-h-[500px] flex flex-col justify-between relative overflow-hidden">
              
              {/* Animated Simulated Mouse Pointer */}
              {cursorCoords && (
                <div 
                  className="absolute pointer-events-none z-50 transition-all duration-700 ease-in-out"
                  style={{ left: cursorCoords.x, top: cursorCoords.y }}
                >
                  <svg className="w-5 h-5 drop-shadow-md text-[#6366F1]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 3V19.5L9.8 14.2H17.5L4.5 3Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  {/* Ripple click animation */}
                  {((demoProgress >= 15.5 && demoProgress < 17.5) || 
                    (demoProgress >= 33.5 && demoProgress < 35.5) || 
                    (demoProgress >= 51.5 && demoProgress < 53.5) || 
                    (demoProgress >= 67.5 && demoProgress < 69.5) || 
                    (demoProgress >= 83.5 && demoProgress < 85.5)) && (
                    <span className="absolute -top-1.5 -left-1.5 w-8 h-8 border-4 border-[#6366F1] rounded-full animate-ping opacity-75" />
                  )}
                </div>
              )}

              {/* Active Demo Content Rendering */}
              {activeVideoDemo === 'copy' ? (
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Left Column: Briefing Panel (4-Step Wizard Simulation) */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm flex flex-col justify-between min-h-[360px]">
                      
                      {/* Step tracker matching actual app */}
                      <div className="border-b border-stone-100 pb-3 mb-3">
                        <div className="flex items-center justify-between">
                          {[
                            { step: 1, label: 'Produto' },
                            { step: 2, label: 'Objetivo' },
                            { step: 3, label: 'Tom' },
                            { step: 4, label: 'Confirmar' }
                          ].map((s) => {
                            const isActive = demoStep === s.step;
                            const isCompleted = demoStep > s.step;
                            return (
                              <div key={s.step} className="flex items-center flex-1 last:flex-none">
                                <div className="flex items-center space-x-1">
                                  <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
                                    isActive
                                      ? 'bg-[#6366F1] text-white ring-2 ring-indigo-150'
                                      : isCompleted
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-stone-100 text-stone-400 border border-stone-200'
                                  }`}>
                                    {isCompleted ? '✓' : s.step}
                                  </div>
                                  <span className={`text-[9.5px] font-extrabold hidden md:inline ${isActive ? 'text-[#6366F1]' : 'text-stone-400'}`}>
                                    {s.label}
                                  </span>
                                </div>
                                {s.step < 4 && (
                                  <div className={`h-[1px] mx-1 flex-1 ${isCompleted ? 'bg-emerald-400' : 'bg-stone-200'}`} />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step Contents - simulating real input */}
                      <div className="flex-1 flex flex-col justify-between py-2">
                        {demoStep === 1 && (
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-1.5 pb-0.5">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 1/4</span>
                              <span className="text-xs font-black text-stone-850">Identificação do Produto</span>
                            </div>
                            
                            <div className="space-y-0.5">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Nome da Marca / Produto</label>
                              <input 
                                type="text" 
                                readOnly 
                                value={demoProgress > 4 ? "DocSpace Copy Master" : ""} 
                                placeholder="Digitando..."
                                className="w-full bg-stone-50 border border-stone-200 text-xs font-bold text-stone-850 px-3 py-1.5 rounded-xl focus:outline-none"
                              />
                            </div>

                            <div className="space-y-0.5">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Proposta Única de Valor (UVP)</label>
                              <input 
                                type="text" 
                                readOnly 
                                value={demoProgress > 8 ? "Utiliza inteligência avançada para gerar copy master para múltiplos canais." : ""} 
                                placeholder="Definindo UVP..."
                                className="w-full bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 px-3 py-1.5 rounded-xl focus:outline-none"
                              />
                            </div>

                            <div className="space-y-0.5">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Persona: Cliente Ideal</label>
                              <input 
                                type="text" 
                                readOnly 
                                value={demoProgress > 12 ? "Criadores de conteúdo, freelancers e agências de marketing." : ""} 
                                placeholder="Definindo persona..."
                                className="w-full bg-stone-50 border border-stone-200 text-xs font-medium text-stone-750 px-3 py-1.5 rounded-xl focus:outline-none"
                              />
                            </div>

                            <div className="pt-1">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 2</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 2 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-0.5">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 2/4</span>
                              <span className="text-xs font-black text-stone-850">Canal & Objetivo Editorial</span>
                            </div>
                            
                            <div className="space-y-1">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Objetivo da Conversão</label>
                              <div className="w-full bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 px-3 py-2 rounded-xl">
                                🎯 Capturar lead qualificado (Cadastros/Lista)
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Canais de Destino Selecionados</label>
                              <div className="grid grid-cols-2 gap-1.5 text-[10px] font-bold text-stone-700">
                                <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-150 text-[#6366F1] p-1.5 rounded-lg">✓ Página de Vendas</div>
                                <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-150 text-[#6366F1] p-1.5 rounded-lg">✓ Instagram Post</div>
                                <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-150 text-[#6366F1] p-1.5 rounded-lg">✓ E-mail Frio</div>
                                <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-150 text-[#6366F1] p-1.5 rounded-lg">✓ LinkedIn Post</div>
                              </div>
                            </div>

                            <div className="pt-2">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 3</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 3 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-0.5">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 3/4</span>
                              <span className="text-xs font-black text-stone-850">Identidade & Framework</span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                              <div className="space-y-1">
                                <label className="text-[9px] font-extrabold text-stone-500 uppercase">Tom de Voz</label>
                                <div className="bg-indigo-50 border border-indigo-150 text-[#6366F1] text-[10px] font-black text-center py-2 px-1 rounded-xl truncate">
                                  🗣️ Persuasivo
                                </div>
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-extrabold text-stone-500 uppercase">Estrutura (Framework)</label>
                                <div className="bg-stone-50 border border-stone-200 text-stone-750 text-[10px] font-bold text-center py-2 px-1 rounded-xl">
                                  📐 AIDA
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-extrabold text-stone-500 uppercase">Tamanho do Conteúdo</label>
                              <div className="w-full bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-700 px-3 py-1.5 rounded-xl">
                                📝 Completo (Premium - Alta Conversão)
                              </div>
                            </div>

                            <div className="pt-2">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 4</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 4 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-1">
                              <span className="text-[10px] font-black uppercase text-amber-600 bg-amber-50 border border-amber-150 px-2 py-0.5 rounded">Revisão</span>
                              <span className="text-xs font-black text-stone-850">Resumo do Briefing</span>
                            </div>
                            
                            <div className="bg-stone-50 rounded-xl p-2.5 border border-stone-150 text-[10.5px] space-y-1 text-stone-600">
                              <p>📌 <strong>Marca:</strong> DocSpace Copy Master</p>
                              <p>👥 <strong>Persona:</strong> Criadores, freelas e agências</p>
                              <p>🗣️ <strong>Tom:</strong> Persuasivo | 📐 <strong>Fwk:</strong> AIDA</p>
                              <p>📸 <strong>Canais:</strong> Página de Vendas + 12 canais</p>
                            </div>

                            <div className="pt-2">
                              <button className="w-full bg-[#6366F1] text-white text-[11px] font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg ring-4 ring-indigo-500/10 hover:scale-[1.01] transition-all">
                                <Sparkles className="w-4 h-4" />
                                <span>Gerar Copy Master 🚀</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 5 && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                              <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 border border-emerald-150 px-2 py-0.5 rounded">✓ Processado</span>
                              <span className="text-[10.5px] font-bold text-stone-550">Gasto: 1 Crédito</span>
                            </div>

                            {/* Chat Panel Mockup (Opens during step 5) */}
                            <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 shadow-xs space-y-2">
                              <div className="flex items-center gap-1.5 border-b border-stone-100 pb-1.5">
                                <MessageCircle className="w-3.5 h-3.5 text-[#6366F1]" />
                                <span className="text-[10px] font-black text-stone-800 uppercase tracking-wider">Ajuste Assistido (Chat AI)</span>
                              </div>
                              
                              <div className="space-y-1.5 max-h-[115px] overflow-y-auto mb-2 text-[10px] scrollbar-none leading-relaxed">
                                {simulatedChatMessages.map((msg, idx) => (
                                  <div key={idx} className={`p-2 rounded-xl leading-normal ${msg.role === 'user' ? 'bg-indigo-50 border border-indigo-100 text-indigo-950 ml-6 font-semibold' : 'bg-white border border-stone-150 text-stone-600 mr-6'}`}>
                                    {msg.text}
                                  </div>
                                ))}
                              </div>

                              <div className="flex gap-1">
                                <input 
                                  type="text" 
                                  readOnly 
                                  value={chatInputValue}
                                  placeholder="Peça alterações aqui..."
                                  className="w-full bg-white border border-stone-200 text-[10.5px] px-2.5 py-1.5 rounded-lg focus:outline-none font-medium"
                                />
                                <button className="bg-[#6366F1] text-white p-1.5 rounded-lg cursor-not-allowed">
                                  <Send className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Output Copy Preview (Aesthetic Dark Editor Pane) */}
                  <div className="lg:col-span-3 flex flex-col justify-between">
                    <div className="bg-[#191816] rounded-2xl border border-stone-800 shadow-xl flex flex-col h-full overflow-hidden min-h-[360px]">
                      <div className="bg-[#24221F] px-4 py-3 flex items-center justify-between text-white border-b border-stone-800">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-indigo-400" />
                          <span className="text-xs font-mono font-bold tracking-wider uppercase text-indigo-400">Editor DocSpace Copy Master</span>
                        </div>
                        <span className="text-[9px] font-mono bg-stone-800 px-2 py-0.5 rounded text-stone-400">Gemini-3.5-Flash</span>
                      </div>
                      
                      <div className="p-4 md:p-5 flex-1 font-mono text-[11px] md:text-xs leading-relaxed text-stone-300 bg-[#1D1B18] overflow-y-auto whitespace-pre-wrap select-none scrollbar-none">
                        {simulatedCopyResult ? (
                          <div className="space-y-2">
                            {simulatedCopyResult}
                            <span className="inline-block w-1.5 h-3.5 bg-[#6366F1] animate-pulse ml-0.5" />
                          </div>
                        ) : (
                          <div className="text-stone-600 flex flex-col items-center justify-center h-full text-center font-sans space-y-2 py-10">
                            <Bot className="w-10 h-10 text-stone-700 animate-bounce" />
                            <p className="text-xs font-bold uppercase tracking-wider">Aguardando Execução</p>
                            <p className="text-[11px] text-stone-500 max-w-xs leading-normal">Insira as informações de briefing no wizard ao lado para assistir à IA gerar e refinar seu text em tempo real.</p>
                          </div>
                        )}
                      </div>

                      <div className="bg-[#141311] p-3 border-t border-stone-800 flex items-center justify-between text-[10px] font-bold text-stone-500">
                        <span className="flex items-center gap-1">📋 Pronto para Copiar & Colar</span>
                        <span className="text-[#6366F1] flex items-center gap-1">Ajustável por Chat</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Campaign Multichannel simulation content (Aesthetic step-by-step)
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Left Column: Multichannel Campaign Wizard Config */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm flex flex-col justify-between min-h-[360px]">
                      
                      {/* Step tracker matching campaign */}
                      <div className="border-b border-stone-100 pb-3 mb-3">
                        <div className="flex items-center justify-between">
                          {[
                            { step: 1, label: 'Campanha' },
                            { step: 2, label: 'Canais' },
                            { step: 3, label: 'Instruções' },
                            { step: 4, label: 'Confirmar' }
                          ].map((s) => {
                            const isActive = demoStep === s.step;
                            const isCompleted = demoStep > s.step;
                            return (
                              <div key={s.step} className="flex items-center flex-1 last:flex-none">
                                <div className="flex items-center space-x-1">
                                  <div className={`w-4.5 h-4.5 rounded-full flex items-center justify-center text-[9px] font-black transition-all ${
                                    isActive
                                      ? 'bg-[#6366F1] text-white ring-2 ring-indigo-150'
                                      : isCompleted
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-stone-100 text-stone-400 border border-stone-200'
                                  }`}>
                                    {isCompleted ? '✓' : s.step}
                                  </div>
                                  <span className={`text-[9.5px] font-extrabold hidden md:inline ${isActive ? 'text-[#6366F1]' : 'text-stone-400'}`}>
                                    {s.label}
                                  </span>
                                </div>
                                {s.step < 4 && (
                                  <div className={`h-[1px] mx-1 flex-1 ${isCompleted ? 'bg-emerald-400' : 'bg-stone-200'}`} />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Step Contents - Campaign */}
                      <div className="flex-1 flex flex-col justify-between py-2">
                        {demoStep === 1 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-1">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 1/4</span>
                              <span className="text-xs font-black text-stone-850">Informações da Campanha</span>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-extrabold text-stone-500 uppercase">Nome da Marca / Cliente</label>
                              <input 
                                type="text" 
                                readOnly 
                                value={demoProgress > 4 ? "DocSpace Copy Master" : ""} 
                                placeholder="Digitando..."
                                className="w-full bg-stone-50 border border-stone-200 text-xs font-bold text-stone-850 px-3 py-2 rounded-xl focus:outline-none"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-extrabold text-stone-500 uppercase">Nome do Lançamento</label>
                              <input 
                                type="text" 
                                readOnly 
                                value={demoProgress > 10 ? "Campanha Multicanal Completa" : ""} 
                                placeholder="Definindo..."
                                className="w-full bg-stone-50 border border-stone-200 text-xs font-medium text-stone-750 px-3 py-2 rounded-xl focus:outline-none"
                              />
                            </div>

                            <div className="pt-2">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 2</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 2 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-0.5">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 2/4</span>
                              <span className="text-xs font-black text-stone-850">Distribuição Multicanais</span>
                            </div>

                            <div className="space-y-1">
                              <div className="flex justify-between items-center">
                                <label className="text-[9px] font-extrabold text-stone-500 uppercase">Frequência Editorial</label>
                                <span className="text-[8px] font-mono text-[#6366F1] font-bold">Lote Automatizado</span>
                              </div>
                              <div className="w-full bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 px-3 py-1.5 rounded-xl">
                                📅 3x por semana (Intensivo)
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <div className="flex justify-between items-center">
                                <label className="text-[9px] font-extrabold text-stone-500 uppercase">Canais Sintonizados</label>
                                <div className="flex gap-1.5 text-[8px] font-black">
                                  <span className={`px-1.5 py-0.5 rounded transition ${demoProgress > 23 && demoProgress <= 29 ? 'bg-[#6366F1] text-white shadow-xs' : 'bg-stone-100 text-stone-500'}`}>TODOS</span>
                                  <span className={`px-1.5 py-0.5 rounded transition ${demoProgress <= 23 ? 'bg-red-500 text-white shadow-xs' : 'bg-stone-100 text-stone-500'}`}>LIMPAR</span>
                                </div>
                              </div>

                              <div className="space-y-2">
                                {/* Group 1: Redes Sociais */}
                                <div>
                                  <span className="text-[8.5px] font-black text-stone-400 uppercase tracking-wider block mb-1">Redes Sociais & Atração</span>
                                  <div className="grid grid-cols-2 gap-1 text-[9.5px] font-bold">
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 ? '✓' : '○'}</span> Instagram Post
                                    </div>
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 ? '✓' : '○'}</span> TikTok Video
                                    </div>
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 && demoProgress <= 29 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 && demoProgress <= 29 ? '✓' : '○'}</span> LinkedIn (B2B)
                                    </div>
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 && demoProgress <= 29 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 && demoProgress <= 29 ? '✓' : '○'}</span> WhatsApp Script
                                    </div>
                                  </div>
                                </div>

                                {/* Group 2: Vendas & Conversão */}
                                <div>
                                  <span className="text-[8.5px] font-black text-stone-400 uppercase tracking-wider block mb-1">Conversão & Vendas</span>
                                  <div className="grid grid-cols-2 gap-1 text-[9.5px] font-bold">
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 ? '✓' : '○'}</span> Landing Page
                                    </div>
                                    <div className={`flex items-center gap-1 p-1 rounded-lg border transition-all duration-300 ${demoProgress > 23 ? 'bg-indigo-50/70 border-indigo-150 text-[#6366F1]' : 'bg-stone-50/50 border-stone-200 text-stone-400'}`}>
                                      <span>{demoProgress > 23 ? '✓' : '○'}</span> E-mail Frio
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-1.5">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 3</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 3 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-1">
                              <span className="text-[10px] font-black uppercase text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded">Etapa 3/4</span>
                              <span className="text-xs font-black text-stone-850">Tom & Notas de Briefing</span>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] font-extrabold text-stone-500 uppercase">Tom de Voz Unificado</label>
                              <div className="bg-[#6366F1]/10 text-[#6366F1] text-[10.5px] font-black py-1.5 px-3 rounded-lg border border-[#6366F1]/20">
                                🗣️ Persuasivo
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] font-extrabold text-stone-500 uppercase">Instruções Importantes do Produto</label>
                              <div className="w-full bg-stone-50 border border-stone-200 text-[10px] text-stone-700 px-3 py-2 rounded-xl h-16 leading-relaxed overflow-hidden">
                                {demoProgress > 42 ? "Utiliza a IA para gerar Copywriting e campanhas de marketing para multicanais, sintonizando posts, blogs, e-mails e scripts com consistência perfeita de tom." : "Digitando..."}
                              </div>
                            </div>

                            <div className="pt-1">
                              <button className="w-full bg-stone-100 border border-stone-200 text-stone-700 text-[10.5px] font-black py-2 px-3 rounded-xl flex items-center justify-between">
                                <span>Avançar para Etapa 4</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 4 && (
                          <div className="space-y-3">
                            <div className="flex items-center gap-1.5 pb-1">
                              <span className="text-[10px] font-black uppercase text-amber-600 bg-amber-50 border border-amber-150 px-2 py-0.5 rounded">Revisão</span>
                              <span className="text-xs font-black text-stone-850">Campanha Integrada</span>
                            </div>

                            <div className="bg-stone-50 rounded-xl p-3 border border-stone-150 text-[10px] space-y-1 text-stone-600 leading-normal">
                              <p>🏢 <strong>Cliente:</strong> DocSpace Copy Master</p>
                              <p>✨ <strong>Vertical:</strong> Geração de Copy & Campanhas</p>
                              <p>🚀 <strong>Canais sintonizados:</strong> 4 canais integrados</p>
                              <p>📢 <strong>Voz:</strong> Persuasivo</p>
                            </div>

                            <div className="pt-1">
                              <button className="w-full bg-[#6366F1] text-white text-[11px] font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg ring-4 ring-indigo-500/10 hover:scale-[1.01] transition-all">
                                <Sparkles className="w-4 h-4" />
                                <span>Gerar Lote de Campanha (5 cr) ⚡</span>
                              </button>
                            </div>
                          </div>
                        )}

                        {demoStep === 5 && (
                          <div className="space-y-2 flex-1 flex flex-col justify-between">
                            <div>
                              <p className="text-[9.5px] font-extrabold text-stone-500 uppercase tracking-widest mb-1.5">Abas Coordenadas</p>
                              <div className="flex flex-col gap-1.5">
                                {(['instagram', 'email', 'landing_page', 'tiktok'] as const).map((ch) => {
                                  const isSelected = simulatedCampaignChannel === ch;
                                  return (
                                    <button
                                      key={ch}
                                      onClick={() => {
                                        if (demoProgress > 70) setSimulatedCampaignChannel(ch);
                                      }}
                                      disabled={demoProgress <= 70}
                                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-left text-[11px] font-bold transition cursor-pointer ${
                                        isSelected 
                                          ? 'bg-[#6366F1] text-white border-[#6366F1] shadow-sm' 
                                          : 'bg-stone-50 border-stone-150 text-stone-600 hover:border-stone-200 disabled:opacity-50'
                                      }`}
                                    >
                                      <span className="text-xs">
                                        {ch === 'instagram' ? '📸' : ch === 'email' ? '📧' : ch === 'landing_page' ? '🖥️' : '🎬'}
                                      </span>
                                      <span className="truncate flex-1 font-black uppercase tracking-wider text-[9px]">
                                        {ch === 'instagram' ? 'Instagram Post' : ch === 'email' ? 'E-mail Frio' : ch === 'landing_page' ? 'Landing Page' : 'Script TikTok'}
                                      </span>
                                      {demoProgress > 70 && <span className="text-[8px] bg-white/20 text-white px-1.5 py-0.2 rounded">Sincronizado</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Campaign Outpost Display */}
                  <div className="lg:col-span-3">
                    <div className="bg-[#191816] rounded-2xl border border-stone-800 shadow-xl flex flex-col h-full overflow-hidden min-h-[360px]">
                      {demoStep === 5 ? (
                        <>
                          <div className="p-3.5 border-b border-stone-800 bg-[#24221F] flex items-center justify-between text-white">
                            <div className="flex items-center gap-2.5">
                              <img 
                                src={simulatedCampaignContent[simulatedCampaignChannel].img} 
                                alt="Visual Preview" 
                                className="w-10 h-10 rounded-lg object-cover border border-stone-700 shrink-0"
                              />
                              <div>
                                <h5 className="text-[9px] font-mono font-bold uppercase text-indigo-400 tracking-wider">CANAL SINTONIZADO</h5>
                                <h4 className="text-xs font-bold text-stone-100 truncate max-w-[160px] md:max-w-xs">{simulatedCampaignContent[simulatedCampaignChannel].title}</h4>
                              </div>
                            </div>
                            <span className="text-[8px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full uppercase font-bold">100% Consistente</span>
                          </div>
                          
                          <div className="p-4 flex-1 text-[11px] md:text-xs text-stone-300 leading-relaxed font-mono min-h-[180px] max-h-[220px] overflow-y-auto whitespace-pre-line bg-[#1D1B18] scrollbar-none">
                            {simulatedCampaignContent[simulatedCampaignChannel].body}
                          </div>

                          <div className="bg-[#141311] p-3 border-t border-stone-800 space-y-1.5">
                            <p className="text-[8.5px] font-mono font-bold text-stone-550 uppercase tracking-widest">Inteligência de Metadados & Sugestões:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {simulatedCampaignContent[simulatedCampaignChannel].bullets.map((b, i) => (
                                <span key={i} className="text-[9px] font-bold bg-[#6366F1]/15 text-[#6366F1] px-2 py-0.5 rounded border border-[#6366F1]/10">
                                  {b}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center text-stone-600 space-y-3 min-h-[360px] py-20">
                          <Bot className="w-10 h-10 text-stone-700 animate-bounce" />
                          <div>
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Orquestração em Lote Multicanal</p>
                            <p className="text-[11px] text-stone-500 mt-1 max-w-xs leading-normal">Insira o briefing do produto ao lado para ver a IA sintonizar e sincronizar canais, e-mails e criativos de forma simultânea e consistente.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Simulated Video Controller Bottom Bar */}
              <div className="border-t border-stone-200/60 pt-4 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span className="text-[10.5px] font-mono font-bold text-stone-600 uppercase tracking-wider">{simulatedStatusText}</span>
                </div>

                {/* Simulated Media controls */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2.5 rounded-full bg-[#1D1B18] text-white hover:bg-indigo-600 transition shadow-sm cursor-pointer"
                    title={isPlaying ? "Pausar Simulação" : "Iniciar Simulação"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 justify-between text-[9px] font-bold text-stone-400 font-mono mb-1">
                      <span>{activeVideoDemo === 'copy' ? 'Fluxo: Briefing ➜ Geração ➜ Chat' : 'Fluxo: Briefing ➜ Multi-Peças ➜ Sincronização'}</span>
                      <span>{Math.floor((demoProgress / 100) * 35)}s / 35s</span>
                    </div>
                    {/* Progress track */}
                    <div className="w-48 h-2 bg-stone-200 rounded-full overflow-hidden relative border border-stone-300">
                      <div 
                        className="h-full bg-indigo-650 bg-[#6366F1] transition-all duration-200"
                        style={{ width: `${demoProgress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Final Call to action */}
                <button
                  onClick={onGetStarted}
                  className="bg-[#6366F1] hover:bg-indigo-700 text-white text-xs font-black px-4.5 py-2.5 rounded-xl shadow-sm transition hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  Criar Conta no Plano Gratuito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Channels Grid Section */}
      <section id="channels" className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 border border-indigo-150 px-3.5 py-1 rounded-full uppercase tracking-wider">
              CANAIS COM SUPORTE COMPLETO
            </span>
            <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 mt-4">
              Destaque-se em cada ponto de contato
            </h2>
            <p className="text-stone-500 text-sm font-medium mt-3">
              Não perca tempo tentando adaptar textos manualmente. O CopyMaster foi programado com regras editoriais avançadas específicas para cada uma destas <strong>13 entregas de mercado</strong>:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4.5">
            {[
              { title: 'Página de Vendas (Landing Page)', desc: 'Headlines, sub-headlines, ganchos de promessa, blocos de quebra de objeções e ofertas diretas focadas em fechar vendas.', icon: '🖥️' },
              { title: 'E-mail Frio (Cold Outreach)', desc: 'Sequências de engajamento para nutrição ativa de leads corporativos com altas taxas de abertura e respostas reais.', icon: '📧' },
              { title: 'Anúncio de Tráfego Pago (Ads)', desc: 'Copies curtas, dinâmicas e persuasivas para Meta Ads, Instagram e Facebook que otimizam o seu custo por clique.', icon: '⚡' },
              { title: 'Instagram Post Orgânico', desc: 'Legendas profundas unindo Visual & Storytelling autêntico para gerar compartilhamentos, comentários e directs salvos.', icon: '📸' },
              { title: 'LinkedIn Post Orgânico', desc: 'Posicionamento profissional de autoridade intelectual B2B para captar conexões executivas qualificadas.', icon: '💼' },
              { title: 'Facebook Post Orgânico', desc: 'Legendas engajadoras voltadas para debates comunitários e alta retenção de grupos de interesse.', icon: '👥' },
              { title: 'TikTok (Vídeo Curto / Viral)', desc: 'Legendas, hashtags e ganchos rápidos de atenção projetados para reter usuários na plataforma e decolar nos feeds.', icon: '🎵' },
              { title: 'Script para Vídeo (YouTube/Reels)', desc: 'Roteiros de alta conversão estruturados de 15 segundos a 10 minutos (incluindo gancho, agitação, oferta e CTAs exatas).', icon: '🎬' },
              { title: 'Google Search Ads', desc: 'Anúncios de busca focados em intenção extrema, respeitando regras rígidas de caracteres e alto índice de qualidade.', icon: '🔍' },
              { title: 'Creative Blogpost (SEO)', desc: 'Artigos completos, originais e profundos com formatação Markdown e divisão inteligente de subtítulos focados em rankear.', icon: '✍️' },
              { title: 'WhatsApp Automático', desc: 'Mensagens diretas de vendas, fluxos de recuperação de carrinhos abandonados e boas-vindas irresistíveis.', icon: '💬' },
              { title: 'Telegram Canal / Massa', desc: 'Chamadas expressas em lote, gatilhos de antecipação e links quentes para lançamentos estruturados.', icon: '📢' },
              { title: '𝕏 (Twitter) / Thread', desc: 'Fios persuasivos criados em formato de ganchos em cadeia para prender a leitura rápida e viralizar no feed.', icon: '🐦' }
            ].map((chan, idx) => (
              <div 
                key={idx}
                className="bg-stone-50/50 border border-stone-200/60 p-5 rounded-2xl hover:bg-white hover:border-indigo-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl mb-3 block select-none">{chan.icon}</span>
                  <h3 className="font-display font-black text-xs text-stone-900 leading-snug mb-1.5">{chan.title}</h3>
                  <p className="text-stone-500 text-[10.5px] leading-relaxed font-medium">{chan.desc}</p>
                </div>
              </div>
            ))}

            {/* Special Highlight: Storytelling */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-950 text-white p-6 rounded-2xl md:col-span-2 lg:col-span-2 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.25),transparent)] pointer-events-none" />
              <div>
                <span className="text-2xl mb-3 block">📖</span>
                <span className="text-[10px] font-black text-indigo-300 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-md inline-block mb-2">PROPRIEDADE DE DIFERENCIAÇÃO</span>
                <h3 className="font-display font-black text-sm mb-2">Poderoso Motor de Storytelling Integrado</h3>
                <p className="text-indigo-150/90 text-xs leading-relaxed font-medium">
                  Chega de discursos frios e sem empatia. Ative o framework de Storytelling estruturado na <strong>Jornada do Herói</strong> ou <strong>Histórias de Fracasso-Recuperação</strong> para criar pontes de altíssima conexão emocional, gerando reciprocidade e desejo ardente de compra de forma imperceptível no consumidor.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-indigo-800 flex items-center justify-between text-[11px] font-semibold text-indigo-200">
                <span>Criado para emocionar e converter</span>
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced AI Parameterization Section */}
      <section className="py-20 bg-stone-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content: Description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[10px] font-black text-[#6366F1] bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-wider">
                SISTEMA DE HIPER-PARAMETRIZAÇÃO
              </span>
              
              <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 leading-[1.12]">
                Guie a IA com a precisão dos grandes estrategistas
              </h2>
              
              <p className="text-stone-650 text-sm font-medium leading-relaxed">
                Você tem o controle cirúrgico. Diferente de robôs que geram parágrafos repetitivos, o DocSpace CopyMaster parametriza todas as variáveis cruciais da sua comunicação de vendas para dar o foco exato que o seu funil operacional exige:
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Objetivos Personalizados', desc: 'Oriente se o texto deve focar em Venda Direta, Captação de Leads, Branding Estratégico ou Nutrição de leads frios.' },
                  { title: 'Tom de Voz do Copymaster', desc: 'Escolha tons como Persuasivo (Forte e Convincente), Autoridade de Especialista, Empático/Compreensivo, Científico/Dados ou Descontraído.' },
                  { title: 'Frameworks Consagrados de Mercado', desc: 'Utilize estruturas científicas consolidadas: AIDA, PAS, Jornada do Herói, Questão-Agitação-Solução ou dezenas de outros atalhos rápidos.' },
                  { title: 'SEO & Palavras-chave Obrigatórias', desc: 'Indique palavras obrigatórias que a IA distribuirá organicamente pelo artigo para acelerar o rankeamento no Google.' },
                  { title: 'Gatilhos Mentais CTA', desc: 'Ative psicologias explícitas no encerramento: Escassez, Urgência extrema, Prova Social consolidada ou Reciprocidade.' }
                ].map((p, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="h-5 w-5 bg-indigo-100 text-[#6366F1] flex items-center justify-center rounded-full shrink-0 font-bold text-xs mt-0.5">✓</div>
                    <div>
                      <h4 className="text-xs font-black text-stone-850">{p.title}</h4>
                      <p className="text-[11px] text-stone-500 leading-normal mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Beautiful Bento Grid of Parameter Visualizers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Parameter Bento 1: Growth Engine & Image Suggestion */}
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-xs text-stone-900">Growth Engine & Imagens</h3>
                <p className="text-stone-550 text-[10.5px] leading-relaxed font-medium">
                  A nossa IA de crescimento gera ideias e diretrizes visuais ricas de sugestão de imagem integradas a cada copy. Você recebe ideias de diagramação e indicações de cenários para criar artes incríveis no Canva ou gerar imagens no Midjourney.
                </p>
                <div className="bg-amber-50 border border-amber-200/50 rounded-xl p-3 text-[10px] text-amber-950 font-semibold font-mono">
                  📷 "Sugerido: Close-up de copo de café fumegante sobre caderno com canota executiva. Tons terrosos."
                </div>
              </div>

              {/* Parameter Bento 2: Chat de Ajustes Ilimitados */}
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-xs text-stone-900">Chat de Ajuste Integrado</h3>
                <p className="text-stone-550 text-[10.5px] leading-relaxed font-medium">
                  Após a primeira geração, o trabalho não acaba! Use o Chat de IA integrado para pedir refinamentos, variação de chamadas, inclusão de emojis, encurtamento do texto ou tradução. Ajustes ilimitados por linguagem natural.
                </p>
                <div className="bg-indigo-50/60 border border-indigo-150 rounded-xl p-3 text-[10px] text-indigo-950 font-semibold font-mono flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>"Gostaria de reescrever em formato de post de blog?"</span>
                </div>
              </div>

              {/* Parameter Bento 3: Registro de Histórico de Campanhas */}
              <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm space-y-4 sm:col-span-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-indigo-550 bg-[#6366F1] text-white flex items-center justify-center shadow-sm">
                      <History className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xs text-stone-900">Controle Editorial & Agendamento de Disparos</h3>
                      <p className="text-[10px] text-stone-450 font-bold uppercase tracking-wider">Economize tempo e planeje suas ações</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-[#6366F1] bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-full uppercase">Até 5 dias</span>
                </div>
                
                <p className="text-stone-550 text-[10.5px] leading-relaxed font-medium">
                  Economize tempo na sua operação diária de copywriting. É possível gerar campanhas completas para múltiplos canais, sintonizar o tom de voz e manter o disparo de cada peça agendado para até 5 dias de antecedência. Aproveite o tempo economizado na geração de copies, campanhas e storytelling para expandir sua cartela de clientes e focar na estratégia de alto nível.
                </p>

                {/* Simulated history table mockup */}
                <div className="border border-stone-200 rounded-xl overflow-hidden text-[9px] font-mono">
                  <div className="bg-stone-50 border-b border-stone-150 p-2.5 flex items-center justify-between text-stone-400 font-bold uppercase">
                    <span>Criação Histórica</span>
                    <span>Canais</span>
                    <span>Data</span>
                  </div>
                  <div className="p-2 flex items-center justify-between border-b border-stone-100 text-stone-700 bg-white font-semibold">
                    <span>🚀 Lançamento FitLife App</span>
                    <span className="bg-indigo-50 text-indigo-650 px-1.5 py-0.5 rounded text-[8px]">4 Canais</span>
                    <span>Hoje, 14:24</span>
                  </div>
                  <div className="p-2 flex items-center justify-between text-stone-500 bg-white">
                    <span>📝 Copy Master - Vendas Direct</span>
                    <span className="bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded text-[8px]">1 Canal</span>
                    <span>Ontem, 09:12</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Tools Integrations Section */}
      <section id="integrations" className="py-20 bg-white border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Grid of Tools icons */}
            <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4 order-last lg:order-first">
              {[
                { name: 'Google Drive', color: 'border-amber-200 hover:border-amber-300', desc: 'Salve e arquive seus briefings diretamente em pastas estruturadas.', icon: '📁', logoText: 'Drive' },
                { name: 'Google Sheets', color: 'border-emerald-200 hover:border-emerald-300', desc: 'Exporte listas de copies geradas de forma organizada em planilhas.', icon: '📊', logoText: 'Sheets' },
                { name: 'Notion', color: 'border-stone-250 hover:border-stone-300', desc: 'Organize suas pautas de lançamento com exportação Markdown imediata.', icon: '📓', logoText: 'Notion' },
                { name: 'Slack', color: 'border-pink-200 hover:border-pink-300', desc: 'Comunique novos copys de anúncios de imediato ao seu time de mídia.', icon: '💬', logoText: 'Slack' },
                { name: 'Trello', color: 'border-blue-200 hover:border-blue-300', desc: 'Envie links estruturados e copies para cartões do seu quadro operacional.', icon: '📋', logoText: 'Trello' },
                { name: 'Copy & Paste', color: 'border-indigo-200 hover:border-indigo-300', desc: 'Botão rápido de cópia inteligente com formatação limpa e ágil.', icon: '⚡', logoText: 'Cópia Rápida' }
              ].map((tool, idx) => (
                <div 
                  key={idx}
                  className={`bg-stone-50/40 border p-5 rounded-2xl flex flex-col justify-between hover:bg-white hover:shadow-md transition-all duration-350 ${tool.color}`}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <span className="text-xl select-none">{tool.icon}</span>
                      <span className="text-[11px] font-black text-stone-900 tracking-tight">{tool.logoText}</span>
                    </div>
                    <p className="text-[10px] text-stone-500 leading-normal font-semibold">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 border border-indigo-150 px-3.5 py-1 rounded-full uppercase tracking-wider">
                FLUXO OPERACIONAL SINTONIZADO
              </span>
              <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 leading-[1.1]">
                Conecte-se com as ferramentas do seu dia a dia
              </h2>
              <p className="text-stone-650 text-sm font-medium leading-relaxed">
                Suas copies não devem ficar presas. Nós simplificamos a exportação e organizamos a distribuição dos seus textos sintonizados. Exporte de forma imediata e limpa para suas pastas compartilhadas do **Google Drive**, organize suas tabelas de pautas no **Google Sheets** ou copie e cole com formatação de pauta estruturada para o **Trello, Slack e Notion**.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Google Workspace Integrado</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-full">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Exportação Markdown Limpa</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Grid: Three main blocks */}
      <section id="features" className="py-20 bg-stone-50 border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-widest">
              POR QUE ESCOLHER O DOCSPACE COPYMASTER?
            </span>
            <h2 className="text-3xl font-display font-black tracking-tight text-stone-900 mt-4">
              A arquitetura perfeita para sua produção de copy
            </h2>
            <p className="text-stone-500 text-sm font-medium mt-3">
              Não somos um gerador genérico. Nós desenvolvemos uma estrutura focada na conversão de vendas, sintonizada com o mercado de marketing digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 border border-stone-200 rounded-3xl bg-white hover:border-stone-300 transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#6366F1] text-white flex items-center justify-center shadow mb-6">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-stone-900 mb-2.5">Copywriter Direcionado por IA</h3>
              <p className="text-stone-550 text-[11px] leading-relaxed font-medium">
                Insira o nome do seu produto, o público-alvo ideal e selecione seu framework favorito. Nossa tecnologia exclusiva escreve e-mails, anúncios e scripts de vídeo sintonizados para alta conversão.
              </p>
              <ul className="mt-5 space-y-2.5 text-[10.5px] font-bold text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Frameworks AIDA, PAS, etc.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Gatilhos mentais sob medida</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-stone-200 rounded-3xl bg-white hover:border-stone-300 transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#6366F1] text-white flex items-center justify-center shadow mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-stone-900 mb-2.5">Campanhas Multicanais</h3>
              <p className="text-stone-550 text-[11px] leading-relaxed font-medium">
                Crie um briefing único e deixe a inteligência estruturar as peças de forma integrada. Seus e-mails, anúncios para redes sociais e headlines de páginas trabalharão em sintonia perfeita.
              </p>
              <ul className="mt-5 space-y-2.5 text-[10.5px] font-bold text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Alinhamento editorial em múltiplos canais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Sintonia inteligente e geração em lote</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-stone-200 rounded-3xl bg-white hover:border-stone-300 transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-[#6366F1] text-white flex items-center justify-center shadow mb-6">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-black text-stone-900 mb-2.5">Controle e Relatórios</h3>
              <p className="text-stone-550 text-[11px] leading-relaxed font-medium">
                Tenha transparência total. Nossa seção de Registro Editorial Consolidado permite rastrear cada criação por campanha, o volume de palavras e os canais utilizados com interface otimizada.
              </p>
              <ul className="mt-5 space-y-2.5 text-[10.5px] font-bold text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Histórico detalhado de consumo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6366F1]" />
                  <span>Análise de palavras e canais</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Analytics and Executive Reports Section */}
      <section className="py-20 bg-stone-50 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Copy and Details */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-black text-[#6366F1] bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-widest">
                MÉTRICAS & RELATÓRIOS EXECUTIVOS
              </span>
              <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 leading-[1.12]">
                Acompanhe o desempenho de copy e baixe relatórios com um clique
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed font-medium">
                Gerencie sua produção editorial de forma altamente analítica. O painel consolidado do DocSpace fornece um panorama visual completo das suas criações, permitindo mensurar a distribuição dos esforços de copywriting por múltiplos canais em tempo real.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-black text-stone-900 flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-indigo-50 text-[#6366F1]"><BarChart3 className="w-4 h-4" /></span>
                    Gráficos Interativos em Tela
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                    Visualize seus dados consolidados em gráficos de barras verticais e linhas dinâmicos diretamente em seu painel para mensurar o volume gerado e otimizar seu ritmo de postagens de forma visual.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-stone-900 flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-indigo-50 text-[#6366F1]"><Layers className="w-4 h-4" /></span>
                    Divisão por Canal
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                    Entenda exatamente para quais redes ou mídias (Instagram, E-mail, LinkedIn, Blogs, etc.) seu conteúdo está direcionado, através de segmentações gráficas precisas.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-stone-900 flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-indigo-50 text-[#6366F1]"><FileText className="w-4 h-4" /></span>
                    Relatórios em Texto e Dados
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                    Baixe relatórios analíticos estruturados em texto e dados organizados nos formatos profissionais (sem suporte gráfico nos arquivos de download), ideais para apresentar a clientes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-black text-stone-900 flex items-center gap-2">
                    <span className="p-1 rounded-lg bg-indigo-50 text-[#6366F1]"><ExternalLink className="w-4 h-4" /></span>
                    Múltiplos Formatos
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium leading-relaxed">
                    Gere e baixe arquivos de alta qualidade sob demanda nos formatos profissionais <strong>PDF, DOCX e CSV</strong>, perfeitamente organizados para uso imediato em planilhas ou editores.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Visual Mockup of Dashboard Analytics & Download Actions */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-stone-200/80 rounded-3xl p-6 shadow-xl relative overflow-hidden space-y-6">
                {/* Mockup Header */}
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-[#6366F1] bg-indigo-50 px-2 py-0.5 rounded-full font-mono">
                      Painel de Controle
                    </span>
                    <h3 className="font-display font-black text-sm text-stone-900 mt-1">
                      Métricas Consolidadas de Copywriting
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-stone-500 font-mono">LIVE PREVIEW</span>
                  </div>
                </div>

                {/* Interactive Mockup Tab Selector */}
                <div className="flex bg-stone-100 p-1 rounded-2xl gap-1">
                  <button
                    onClick={() => setMockupChartType('bar')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-[10px] font-black transition-all cursor-pointer ${
                      mockupChartType === 'bar'
                        ? 'bg-white text-indigo-600 shadow-xs'
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Volume (Barras)</span>
                    <span className="sm:hidden">Barras</span>
                  </button>
                  <button
                    onClick={() => setMockupChartType('line')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-[10px] font-black transition-all cursor-pointer ${
                      mockupChartType === 'line'
                        ? 'bg-white text-indigo-600 shadow-xs'
                        : 'text-stone-500 hover:text-stone-700'
                    }`}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ritmo (Linhas)</span>
                    <span className="sm:hidden">Linhas</span>
                  </button>
                </div>

                {/* Simulated Charts rendering based on selected Tab */}
                <div>
                  {mockupChartType === 'bar' && (
                    <div className="border border-stone-150 rounded-2xl p-4 bg-stone-50/50 space-y-4 animate-fadeIn">
                      <div className="text-left border-b border-stone-100 pb-2 flex justify-between items-center">
                        <div>
                          <span className="text-[11px] font-black text-stone-850 block">Volume de Redação Gerada</span>
                          <span className="text-[9px] text-stone-400 font-medium">Total de palavras geradas por campanha em tempo real</span>
                        </div>
                        <span className="text-[9px] font-black text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded-full">VERTICAL</span>
                      </div>
                      
                      <div className="h-44 w-full flex items-stretch overflow-visible pt-2">
                        {/* Y-Axis scale labels */}
                        <div className="w-10 pr-2 border-r border-stone-200 flex flex-col justify-between text-[8px] text-stone-400 font-mono font-bold text-right pt-2 pb-5 select-none pointer-events-none">
                          <span>4.000p</span>
                          <span>3.000p</span>
                          <span>2.000p</span>
                          <span>1.000p</span>
                          <span>0</span>
                        </div>

                        {/* Bars Block */}
                        <div className="flex-1 flex items-end justify-around relative pl-3 pt-2 overflow-visible">
                          {/* Grid Lines */}
                          <div className="absolute inset-0 pl-3 flex flex-col justify-between pointer-events-none opacity-40">
                            {[1, 2, 3, 4, 5].map(line => (
                              <div key={line} className="w-full border-t border-stone-200 border-dashed first:mt-2 last:border-0" />
                            ))}
                          </div>

                          {[
                            { name: 'Lp Vendas', words: 3120, client: 'DocSpace Copy Master', posts: '5 mídias', pct: 78, color: '#6366F1' },
                            { name: 'Lote IG', words: 2450, client: 'FitLife Active App', posts: '8 mídias', pct: 61, color: '#3B82F6' },
                            { name: 'Email Mkt', words: 3890, client: 'SaaS Financeiro Master', posts: '4 mídias', pct: 97, color: '#10B981' },
                            { name: 'Cold Out', words: 1250, client: 'Agência Growth Digital', posts: '2 mídias', pct: 31, color: '#F59E0B' },
                          ].map((b, idx) => {
                            const isHovered = hoveredMockupBarIndex === idx;
                            return (
                              <div
                                key={idx}
                                className="flex flex-col items-center flex-1 mx-1.5 h-full justify-end relative select-none cursor-pointer group"
                                onMouseEnter={() => setHoveredMockupBarIndex(idx)}
                                onMouseLeave={() => setHoveredMockupBarIndex(null)}
                              >
                                {/* Value indicator on top */}
                                <span
                                  style={{ bottom: `${b.pct}%`, color: b.color }}
                                  className={`absolute text-[8px] font-mono font-bold transition-all ${
                                    isHovered ? 'opacity-100 -translate-y-5 text-[9.5px]' : 'opacity-85 -translate-y-3.5'
                                  }`}
                                >
                                  {b.words.toLocaleString('pt-BR')}
                                </span>

                                {/* Bar Pillar */}
                                <div
                                  style={{
                                    height: `${b.pct}%`,
                                    backgroundColor: b.color,
                                    backgroundImage: isHovered
                                      ? `linear-gradient(to top, ${b.color}, ${b.color}99)`
                                      : `linear-gradient(to top, ${b.color}cc, ${b.color}33)`
                                  }}
                                  className={`w-full max-w-[20px] rounded-t-md transition-all duration-300 pointer-events-auto ${
                                    isHovered ? 'scale-x-110 shadow-md shadow-indigo-100' : 'shadow-xs opacity-90'
                                  }`}
                                />

                                {/* Mini Label on X-Axis */}
                                <span className="absolute top-[calc(100%+6px)] text-[8px] text-stone-500 font-bold truncate max-w-[45px] text-center">
                                  {b.name}
                                </span>

                                {/* Tooltip */}
                                {isHovered && (
                                  <div
                                    style={{ borderLeft: `4px solid ${b.color}` }}
                                    className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white border border-stone-200 text-stone-900 text-[10px] rounded-xl p-2.5 shadow-xl z-50 w-52 pointer-events-none leading-normal font-sans text-left animate-fadeIn"
                                  >
                                    <span style={{ color: b.color }} className="block font-black border-b border-stone-100 pb-1 mb-1 text-[10.5px] whitespace-normal break-words">{b.name}</span>
                                    <div className="space-y-0.5 font-medium text-stone-550 text-[9px]">
                                      <p className="flex justify-between items-start gap-2"><span>Cliente:</span> <strong className="text-stone-900 text-right flex-1 truncate max-w-[120px]" title={b.client}>{b.client}</strong></p>
                                      <p className="flex justify-between"><span>Volume:</span> <strong className="font-mono text-stone-900">{b.words.toLocaleString('pt-BR')} posts</strong></p>
                                      <p className="flex justify-between"><span>Posts:</span> <strong className="text-stone-900">{b.posts}</strong></p>
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="h-2" />
                    </div>
                  )}

                  {mockupChartType === 'line' && (
                    <div className="border border-stone-150 rounded-2xl p-4 bg-stone-50/50 space-y-4 animate-fadeIn">
                      <div className="text-left border-b border-stone-100 pb-2 flex justify-between items-center">
                        <div>
                          <span className="text-[11px] font-black text-stone-850 block">Frequência Editorial Planejada</span>
                          <span className="text-[9px] text-stone-400 font-medium">Publicações agendadas e canais mapeados no período</span>
                        </div>
                        <span className="text-[9px] font-black text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded-full">+24% este mês</span>
                      </div>

                      <div className="h-44 w-full flex items-stretch overflow-visible pt-2 relative">
                        {/* Y-Axis scale labels */}
                        <div className="w-10 pr-2 border-r border-stone-200 flex flex-col justify-between text-[8px] text-stone-400 font-mono font-bold text-right pt-2 pb-5 select-none pointer-events-none">
                          <span>5m</span>
                          <span>4m</span>
                          <span>3m</span>
                          <span>2m</span>
                          <span>1m</span>
                          <span>0</span>
                        </div>

                        {/* Spline Area with explicit heights and SVG paths */}
                        <div className="flex-1 h-full relative pl-3 pt-2 overflow-visible">
                          {/* Grid Lines */}
                          <div className="absolute inset-0 pl-3 flex flex-col justify-between pointer-events-none opacity-40">
                            {[1, 2, 3, 4, 5].map(line => (
                              <div key={line} className="w-full border-t border-stone-200 border-dashed first:mt-2 last:border-0" />
                            ))}
                          </div>

                          {/* SVG Spline */}
                          <svg className="w-full h-full absolute inset-0 pl-3 overflow-visible" viewBox="0 0 320 160" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="mockLineGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.18" />
                                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                              </linearGradient>
                              <linearGradient id="mockStrokeGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="50%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#10B981" />
                              </linearGradient>
                            </defs>

                            {/* Curve Area Fill */}
                            <path
                              d="M 20 100 C 55 120, 90 40, 125 70 C 160 100, 195 20, 230 40 C 265 60, 285 130, 300 130 L 300 150 L 20 150 Z"
                              fill="url(#mockLineGrad)"
                              className="transition-all duration-300"
                            />

                            {/* Curve Line */}
                            <path
                              d="M 20 100 C 55 120, 90 40, 125 70 C 160 100, 195 20, 230 40 C 265 60, 285 130, 300 130"
                              fill="none"
                              stroke="url(#mockStrokeGrad)"
                              strokeWidth="3"
                              strokeLinecap="round"
                              className="transition-all duration-300"
                            />

                            {/* SVG Interactive Dots */}
                            {[
                              { cx: 20, cy: 100, date: '06/07', posts: 3, label: '3m', color: '#6366F1' },
                              { cx: 90, cy: 40, date: '07/07', posts: 5, label: '5m', color: '#3B82F6' },
                              { cx: 160, cy: 100, date: '08/07', posts: 3, label: '3m', color: '#10B981' },
                              { cx: 230, cy: 40, date: '09/07', posts: 5, label: '5m', color: '#F59E0B' },
                              { cx: 300, cy: 130, date: '10/07', posts: 1, label: '1m', color: '#EF4444' }
                            ].map((p, idx) => {
                              const isHovered = hoveredMockupLineIndex === idx;
                              return (
                                <g key={idx} className="cursor-pointer overflow-visible">
                                  {isHovered && (
                                    <circle cx={p.cx} cy={p.cy} r="8" fill={p.color} fillOpacity="0.25" className="animate-ping" />
                                  )}
                                  <circle
                                    cx={p.cx}
                                    cy={p.cy}
                                    r={isHovered ? 6 : 4}
                                    fill={isHovered ? '#ffffff' : p.color}
                                    stroke={p.color}
                                    strokeWidth={isHovered ? 3 : 1.5}
                                    onMouseEnter={() => setHoveredMockupLineIndex(idx)}
                                    onMouseLeave={() => setHoveredMockupLineIndex(null)}
                                  />
                                </g>
                              );
                            })}
                          </svg>

                          {/* Relative Overlays for X-Axis dates & text above */}
                          {[
                            { x: '6%', y: '62%', val: '3p', date: '06/07', color: '#6366F1' },
                            { x: '28%', y: '25%', val: '5p', date: '07/07', color: '#3B82F6' },
                            { x: '50%', y: '62%', val: '3p', date: '08/07', color: '#10B981' },
                            { x: '72%', y: '25%', val: '5p', date: '09/07', color: '#F59E0B' },
                            { x: '94%', y: '81%', val: '1p', date: '10/07', color: '#EF4444' }
                          ].map((l, idx) => (
                            <div key={idx} className="absolute pointer-events-none text-center" style={{ left: l.x }}>
                              {/* Post counts directly above nodes */}
                              <span
                                style={{ color: l.color }}
                                className="absolute -translate-y-7 -translate-x-1/2 text-[7.5px] font-mono font-bold"
                              >
                                {l.val}
                              </span>
                              {/* Date labels under the axis line */}
                              <span className="absolute top-40 -translate-x-1/2 text-[7.5px] text-stone-450 font-bold font-mono">
                                {l.date}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tooltip */}
                      {hoveredMockupLineIndex !== null && (() => {
                        const items = [
                          { date: '06/07/2026', posts: 3, client: 'Curso Digital', color: '#6366F1' },
                          { date: '07/07/2026', posts: 5, client: 'E-book Lançamento', color: '#3B82F6' },
                          { date: '08/07/2026', posts: 3, client: 'Agência Exp', color: '#10B981' },
                          { date: '09/07/2026', posts: 5, client: 'Mentoria Vip', color: '#F59E0B' },
                          { date: '10/07/2026', posts: 1, client: 'Geral', color: '#EF4444' }
                        ];
                        const currentItem = items[hoveredMockupLineIndex];
                        return (
                          <div
                            style={{ borderLeft: `4px solid ${currentItem.color}` }}
                            className="absolute bottom-[24%] left-1/2 -translate-x-1/2 bg-white border border-stone-200 text-stone-900 text-[9.5px] rounded-xl p-2.5 shadow-xl z-50 w-48 pointer-events-none leading-normal font-sans text-left animate-fadeIn"
                          >
                            <span style={{ color: currentItem.color }} className="block font-black border-b border-stone-100 pb-1 mb-1">Ritmo Editorial</span>
                            <div className="space-y-0.5 font-medium text-stone-550 text-[8.5px]">
                              <p className="flex justify-between"><span>Data:</span> <strong className="text-stone-850 font-mono">{currentItem.date}</strong></p>
                              <p className="flex justify-between"><span>Atividade:</span> <strong className="text-stone-850">{currentItem.posts} posts sintonizados</strong></p>
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                          </div>
                        );
                      })()}

                      <div className="h-2" />
                    </div>
                  )}

                  {mockupChartType === 'donut' && (
                    <div className="border border-stone-150 rounded-2xl p-4 bg-stone-50/50 space-y-4 animate-fadeIn">
                      <div className="text-left border-b border-stone-100 pb-2 flex justify-between items-center">
                        <div>
                          <span className="text-[11px] font-black text-stone-850 block">Distribuição do Mix por Canal</span>
                          <span className="text-[9px] text-stone-400 font-medium">Proporção e diversificação das mídias planejadas</span>
                        </div>
                        <span className="text-[9px] font-black text-indigo-600 font-mono bg-indigo-50 px-2 py-0.5 rounded-full">OMNICHANNEL</span>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-1 select-none">
                        {/* Ring SVG on Left */}
                        <div className="relative w-28 h-28 flex items-center justify-center shrink-0">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                            {[
                              { name: 'Instagram', percent: 35, color: '#6366F1', strokeDash: '165, 471', strokeOffset: '0' },
                              { name: 'E-mail Frio', percent: 25, color: '#3B82F6', strokeDash: '118, 471', strokeOffset: '-165' },
                              { name: 'LinkedIn', percent: 20, color: '#10B981', strokeDash: '94, 471', strokeOffset: '-283' },
                              { name: 'Landing Page', percent: 15, color: '#F59E0B', strokeDash: '71, 471', strokeOffset: '-377' },
                              { name: 'WhatsApp', percent: 5, color: '#EF4444', strokeDash: '23, 471', strokeOffset: '-448' }
                            ].map((slice, idx) => {
                              const isHovered = hoveredMockupDonutIndex === idx;
                              return (
                                <circle
                                  key={idx}
                                  cx="100"
                                  cy="100"
                                  r="75"
                                  fill="none"
                                  stroke={slice.color}
                                  strokeWidth={isHovered ? 24 : 16}
                                  strokeDasharray={slice.strokeDash}
                                  strokeDashoffset={slice.strokeOffset}
                                  strokeLinecap="round"
                                  className="transition-all duration-300 cursor-pointer"
                                  onMouseEnter={() => setHoveredMockupDonutIndex(idx)}
                                  onMouseLeave={() => setHoveredMockupDonutIndex(null)}
                                />
                              );
                            })}
                          </svg>

                          <div className="absolute flex flex-col items-center justify-center text-center select-none pointer-events-none">
                            {hoveredMockupDonutIndex === null ? (
                              <>
                                <span className="text-xl font-display font-black text-stone-900 leading-none">17</span>
                                <span className="text-[7.5px] text-stone-400 font-black uppercase tracking-wider mt-0.5">Mídias</span>
                              </>
                            ) : (() => {
                              const slices = [
                                { name: 'Instagram', percent: '35%', color: '#6366F1' },
                                { name: 'E-mail Frio', percent: '25%', color: '#3B82F6' },
                                { name: 'LinkedIn', percent: '20%', color: '#10B981' },
                                { name: 'Landing Page', percent: '15%', color: '#F59E0B' },
                                { name: 'WhatsApp', percent: '5%', color: '#EF4444' }
                              ];
                              const currentSlice = slices[hoveredMockupDonutIndex];
                              return (
                                <>
                                  <span style={{ color: currentSlice.color }} className="text-lg font-display font-black leading-none animate-fadeIn">
                                    {currentSlice.percent}
                                  </span>
                                  <span className="text-[7px] text-stone-500 font-bold block mt-0.5 truncate max-w-[65px] animate-fadeIn leading-tight">
                                    {currentSlice.name}
                                  </span>
                                </>
                              );
                            })()}
                          </div>
                        </div>

                        {/* List/Legend on Right */}
                        <div className="flex-1 space-y-1.5 w-full">
                          {[
                            { name: 'Instagram Post Orgânico', percent: 35, color: '#6366F1' },
                            { name: 'E-mail Frio / Sequência', percent: 25, color: '#3B82F6' },
                            { name: 'LinkedIn Post Orgânico', percent: 20, color: '#10B981' },
                            { name: 'Landing Page (Vendas)', percent: 15, color: '#F59E0B' },
                            { name: 'WhatsApp Automático', percent: 5, color: '#EF4444' }
                          ].map((slice, idx) => {
                            const isHovered = hoveredMockupDonutIndex === idx;
                            return (
                              <div
                                key={idx}
                                className={`flex items-center justify-between p-1.5 px-2.5 rounded-lg border transition-all cursor-pointer ${
                                  isHovered
                                    ? 'bg-indigo-50 border-indigo-200 font-bold text-stone-900 scale-[1.02]'
                                    : 'border-stone-100 bg-white hover:bg-stone-50 text-stone-600'
                                }`}
                                onMouseEnter={() => setHoveredMockupDonutIndex(idx)}
                                onMouseLeave={() => setHoveredMockupDonutIndex(null)}
                              >
                                <div className="flex items-center space-x-1.5 text-[9px] min-w-0">
                                  <span style={{ backgroundColor: slice.color }} className="w-2 h-2 rounded-full shrink-0" />
                                  <span className="font-bold text-stone-700 truncate">{slice.name}</span>
                                </div>
                                <span className="text-[9px] font-mono font-black text-indigo-600 block ml-1 shrink-0">
                                  {slice.percent}%
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Download Format Selectors */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-stone-400 uppercase tracking-wider">
                    Geração de Relatório Executivo em Texto/Dados
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="border border-stone-200 rounded-xl p-3 text-center bg-stone-50/20 hover:bg-[#6366F1]/5 hover:border-[#6366F1]/20 transition-all cursor-pointer group">
                      <span className="text-lg block mb-1">📕</span>
                      <span className="text-[10px] font-black text-stone-700 block group-hover:text-[#6366F1]">Relatório PDF</span>
                      <span className="text-[8px] font-bold text-stone-400 font-mono block">Imprimir/Salvar</span>
                    </div>
                    <div className="border border-stone-200 rounded-xl p-3 text-center bg-stone-50/20 hover:bg-[#6366F1]/5 hover:border-[#6366F1]/20 transition-all cursor-pointer group">
                      <span className="text-lg block mb-1">📝</span>
                      <span className="text-[10px] font-black text-stone-700 block group-hover:text-[#6366F1]">Doc Word DOCX</span>
                      <span className="text-[8px] font-bold text-stone-400 font-mono block">Editar Textos</span>
                    </div>
                    <div className="border border-stone-200 rounded-xl p-3 text-center bg-stone-50/20 hover:bg-[#6366F1]/5 hover:border-[#6366F1]/20 transition-all cursor-pointer group">
                      <span className="text-lg block mb-1">📊</span>
                      <span className="text-[10px] font-black text-stone-700 block group-hover:text-[#6366F1]">Tabela CSV</span>
                      <span className="text-[8px] font-bold text-stone-400 font-mono block">Abrir Excel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (COMPLETELY MATCHES APP limits) */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-black text-[#6366F1] bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-widest">
              TABELA DE PLANOS DO PAINEL
            </span>
            <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 mt-4">
              Opções transparentes de investimento
            </h2>
            <p className="text-stone-500 text-sm font-medium mt-3">
              Estes são os planos e preços exatos vigentes no painel administrativo do DocSpace CopyMaster. Comece de graça e mude de nível quando precisar de escala.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-6xl mx-auto">
            {[
              {
                key: 'FREE' as const,
                name: 'Gratuito',
                price: 'R$ 0',
                desc: 'Perfeito para experimentar nossos modelos de copy profissional sem compromisso.',
                labels: ['20 Copies', '5 Campanhas', 'Créditos 45']
              },
              {
                key: 'STARTER' as const,
                name: 'Starter',
                price: 'R$ 29,90',
                desc: 'Excelente para criadores de conteúdo e profissionais autônomos.',
                labels: ['100 Copies', '20 Campanhas', '200 Créditos']
              },
              {
                key: 'PROFESSIONAL' as const,
                name: 'Profissional',
                price: 'R$ 79,90',
                desc: 'Ideal para profissionais em crescimento e pequenas agências de marketing.',
                labels: ['375 Copies', '75 Campanhas', '750 Créditos']
              },
              {
                key: 'AGENCY' as const,
                name: 'Agência',
                price: 'R$ 199,90',
                desc: 'Especialmente projetado para grandes estruturadores e agências escaláveis.',
                labels: ['1500 Copies', '300 Campanhas', '3000 Créditos']
              }
            ].map((p) => (
              <div 
                key={p.key}
                className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden transition-all duration-300 border-stone-200 hover:border-stone-300"
              >
                <div className="space-y-4">
                  <div className="text-stone-500 font-bold uppercase tracking-wider text-[9px]">
                    {p.key === 'FREE' ? 'Avaliação' : 'Licença'}
                  </div>
                  <h4 className="font-display font-black text-lg text-stone-900 text-center">{p.name}</h4>
                  <div className="py-1 text-center">
                    <span className="font-display font-black text-2xl text-stone-900 font-mono">{p.price}</span>
                    {p.key !== 'FREE' && <span className="text-[10px] text-stone-400 font-sans"> / mês</span>}
                  </div>
                  <p className="text-[11px] text-stone-500 leading-normal font-sans min-h-[36px] text-center">
                    {p.desc}
                  </p>

                  <div className="bg-stone-50 border border-stone-100 rounded-xl p-4 text-center space-y-2 font-sans font-medium">
                    {p.labels.map((label, idx) => {
                      const isLast = idx === p.labels.length - 1;
                      return (
                        <div 
                          key={idx} 
                          className={`text-xs font-black text-stone-850 ${
                            isLast ? 'text-[#6366F1] bg-[#6366F1]/5 py-1 px-2.5 rounded-lg border border-[#6366F1]/10 mt-1 font-mono' : 'border-b border-stone-200/50 pb-2'
                          }`}
                        >
                          {label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-5 mt-6">
                  <button
                    type="button"
                    onClick={onGetStarted}
                    className="w-full py-2 rounded-xl text-xs font-black transition-all text-center block font-sans cursor-pointer bg-[#6366F1] hover:bg-[#5356df] text-white shadow-sm hover:scale-[1.01] active:scale-[0.99]"
                  >
                    Assinar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Rules Section */}
      <section id="faq" className="py-20 bg-stone-50 border-t border-stone-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black text-indigo-650 bg-indigo-50 border border-indigo-150 px-3 py-1 rounded-full uppercase tracking-wider">
              REGRAS OPERACIONAIS DO SISTEMA
            </span>
            <h2 className="text-3.5xl font-display font-black tracking-tight text-stone-900 mt-4">
              Perguntas Frequentes & Regras de Negócio
            </h2>
            <p className="text-stone-500 text-sm mt-2.5">
              Esclareça suas dúvidas sobre o funcionamento de consumo de créditos e as regras operacionais de segurança e armazenamento de dados.
            </p>
          </div>

          <div className="space-y-6">
            
            {/* 1. Free Plan Entry */}
            <div className="p-6 border border-stone-200 rounded-2xl bg-white shadow-sm animate-fadeIn">
              <h3 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#6366F1] shrink-0" />
                Como funciona o Plano Gratuito de entrada?
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2.5 ml-6.5 font-medium">
                Ao se cadastrar na plataforma, você passará por um breve questionário de onboarding e precisa aceitar nossos Termos de Uso e Política de Privacidade para entrar de imediato no Plano Gratuito, sem custos e sem necessidade de inserir cartão de crédito. Você recebe 45 créditos iniciais para testar o potencial do motor do DocSpace Copy Master.
              </p>
            </div>

            {/* 2. Credits consumption */}
            <div className="p-6 border border-stone-200 rounded-2xl bg-white shadow-sm animate-fadeIn">
              <h3 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#6366F1] shrink-0" />
                Como funciona o consumo de créditos por geração?
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2.5 ml-6.5 font-medium">
                O seu saldo é atualizado em tempo real por ação tomada de forma muito simples e transparente:
                <br />
                • Cada <strong>Geração de Copy</strong> consome exatamente <strong>1 crédito</strong>.
                <br />
                • Cada <strong>Geração de Campanha Multicanais completa</strong> consome exatamente <strong>5 créditos</strong>.
                <br />
                O refinamento de textos gerados através do chat assistido por IA não consome novos créditos! Ao fazer um upgrade de plano ou renovar sua assinatura, o seu saldo é liberado integralmente de forma imediata.
              </p>
            </div>

            {/* 3. Storage and validity */}
            <div className="p-6 border border-stone-200 rounded-2xl bg-white shadow-sm animate-fadeIn">
              <h3 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#6366F1] shrink-0" />
                Qual o tempo de armazenamento e validade dos meus conteúdos?
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2.5 ml-6.5 font-medium">
                Para manter a plataforma rápida e em total conformidade, adotamos uma política transparente de retenção de dados e armazenamento:
                <br />
                • <strong>Plano Gratuito:</strong> Seus briefings e conteúdos salvos são armazenados com segurança e excluídos automaticamente após <strong>7 dias</strong>.
                <br />
                • <strong>Planos Pagos (Starter, Profissional, Agência):</strong> Seus briefings e conteúdos salvos são mantidos e protegidos por <strong>90 dias</strong> antes da exclusão automática.
                <br />
                • <strong>Avisos Prévios:</strong> Você receberá um aviso em seu e-mail cadastrado <strong>7 dias antes</strong> de qualquer exclusão automática, para que possa copiar e salvar copies e campanhas em sua própria conta em plataformas que permitem armazenamento, como o Google Drive.
                <br />
                • <strong>Exportações Ilimitadas:</strong> Você pode exportar suas criações a qualquer momento para arquivos nos formatos profissionais <strong>PDF, DOCX e CSV</strong>, ou enviá-las diretamente para o seu Google Drive e Sheets com poucos cliques!
              </p>
            </div>

            {/* 4. Plan management */}
            <div className="p-6 border border-stone-200 rounded-2xl bg-white shadow-sm animate-fadeIn">
              <h3 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#6366F1] shrink-0" />
                Posso alterar ou cancelar meu plano quando quiser?
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2.5 ml-6.5 font-medium">
                Sim, você tem total flexibilidade para gerenciar sua assinatura na área de faturamento do DocSpace. Ao solicitar alteração ou cancelamento, a transição é imediata e seu plano é atualizado em tempo real para controle operacional.
              </p>
            </div>

            {/* 5. Security & Privacy */}
            <div className="p-6 border border-stone-200 rounded-2xl bg-white shadow-sm animate-fadeIn">
              <h3 className="text-sm font-black text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4.5 h-4.5 text-[#6366F1] shrink-0" />
                Meus dados e campanhas estão protegidos?
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed mt-2.5 ml-6.5 font-medium">
                Privacidade é nossa maior prioridade. Todas as gerações de copy, briefings e dados de pesquisa são de sua propriedade exclusiva e armazenados em infraestrutura segura com conformidade com a LGPD e termos de uso transparentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.18),transparent)] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="text-[10px] font-black text-indigo-300 bg-indigo-500/10 border border-indigo-400/25 px-3 py-1 rounded-full uppercase tracking-widest">
            A HORA É AGORA
          </span>
          <h2 className="text-3.5xl sm:text-4.5xl font-display font-black tracking-tight mt-4 max-w-2xl mx-auto leading-[1.1]">
            Comece a escrever textos que vendem de verdade
          </h2>
          <p className="text-indigo-200/80 text-sm max-w-lg mx-auto mt-4 leading-relaxed font-medium">
            Simplifique a geração de textos e campanhas com Inteligência Artificial. Crie sua conta gratuita em segundos e mude seus resultados hoje.
          </p>
          
          <button
            onClick={onGetStarted}
            className="mt-8 bg-white hover:bg-stone-100 text-stone-950 font-extrabold text-sm py-4 px-8 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center gap-2"
          >
            <span>Criar Minha Conta Grátis</span>
            <ArrowRight className="w-4 h-4 text-indigo-600" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-12 text-xs text-stone-500 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-stone-200 pb-8 mb-8">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-base tracking-tight text-stone-900 flex items-center">
                <span>Doc</span>
                <span className="text-[#6366F1]">Space</span>
                <span className="text-stone-300 font-normal mx-1 select-none">|</span>
                <span className="text-stone-900 font-black text-xs">CopyMaster</span>
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 font-bold">
              <a href="#features" className="hover:text-[#6366F1] transition">Funcionalidades</a>
              <a href="#demo" className="hover:text-[#6366F1] transition">Demonstração</a>
              <a href="#pricing" className="hover:text-[#6366F1] transition">Preços</a>
              <a href="mailto:contato@docspace.tec.br" className="hover:text-[#6366F1] transition">Suporte: contato@docspace.tec.br</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-mono">
            <p>DocSpace CopyMaster • Todos os direitos reservados • 2026</p>
            <div className="flex gap-4 font-sans font-bold">
              <a 
                href="?open=terms" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 cursor-pointer transition"
              >
                Termos de Uso <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-stone-300 select-none">•</span>
              <a 
                href="?open=privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 cursor-pointer transition"
              >
                Política de Privacidade <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
