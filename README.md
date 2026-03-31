# 💰 Caixa do Batalhão - 15º BPM

Sistema de Controle de Caixa e Gestão Financeira desenvolvido para o 15º Batalhão de Polícia Militar.

## 📋 Funcionalidades

### 💵 Controle Financeiro Completo
- **Lançamentos de Entrada e Saída**: Registre todas as movimentações financeiras do batalhão
- **Categorias Predefinidas**: Organização por tipo de despesa/receita (Diárias, Combustível, Material, etc.)
- **Saldo em Tempo Real**: Acompanhamento instantâneo do caixa com cálculo automático

### 📁 Organização por Pastas (Meses/Anos)
- **Estrutura Automática**: Cada lançamento é organizado na pasta do mês correspondente (ex: 2024-03, 2024-04)
- **Navegação Visual**: Interface de pastas para acesso rápido a períodos específicos
- **Histórico Completo**: Acesso a todos os meses com lançamentos

### 📎 Sistema de Anexos (PDFs e Imagens)
- **Armazenamento de Notas Fiscais**: Anexe PDFs de notas fiscais, recibos e comprovantes
- **Suporte a Imagens**: JPG e PNG também aceitos para fotos de documentos
- **Visualizador Integrado**: Visualize documentos sem sair do aplicativo
- **Download Individual**: Baixe arquivos específicos quando necessário
- **Limite de 10MB**: Por arquivo (otimizado para armazenamento mobile)
- **Organização por Mês**: Os arquivos ficam armazenados na pasta do mês do lançamento

### 📊 Relatórios e Exportação
- **Relatório Mensal/Anual**: Geração de relatório completo em HTML (imprima como PDF)
- **Exportação CSV**: Para Excel e análise externa
- **Compartilhamento WhatsApp**: Envio rápido de resumos financeiros
- **Impressão Otimizada**: Layout próprio para impressão A4

## 🚀 Como Usar

### Instalação (PWA)
1. Copie todos os arquivos para uma pasta no seu servidor ou computador
2. Abra o `index.html` em um navegador moderno (Chrome, Edge, Safari)
3. Clique em "Adicionar à Tela Inicial" ou "Instalar App"
4. O app funcionará como um aplicativo nativo, 100% offline

### Primeiro Lançamento
1. Clique em **"➕ Novo Lançamento"**
2. Selecione o tipo: **📥 Entrada** ou **📤 Saída**
3. Preencha: Data, Valor, Categoria, Nº Documento e Descrição
4. **Anexe comprovantes**: Clique na área de upload ou arraste arquivos (PDF, JPG, PNG)
5. Clique em **"💾 Salvar Lançamento"**
6. O sistema organizará automaticamente na pasta do mês

### Organização de Arquivos
```
📁 2024-03 (Março/2024)
   📄 NotaFiscal_Combustivel_001.pdf
   📄 Recibo_Diarias_002.pdf
   📄 Comprovante_Material.jpg

📁 2024-04 (Abril/2024)
   📄 NotaFiscal_Manutencao_003.pdf
   📄 Recibo_Servicos_004.pdf
```

### Visualizando Anexos
1. Na lista de lançamentos, clique no botão **📎** (verde se houver anexos)
2. Visualize miniaturas dos arquivos na modal
3. Clique no arquivo para visualizar em tela cheia
4. Use **⬇️** para download ou **🗑️** para excluir

### Gerando Relatórios
1. Vá na aba **"📈 Relatórios"**
2. Selecione o período (mês inicial e final)
3. Clique em **"📄 Gerar PDF"** para relatório completo
4. Use Ctrl+P no relatório gerado para salvar como PDF

## 💾 Armazenamento de Dados

- **LocalStorage**: Todos os dados são armazenados localmente no dispositivo
- **Privacidade**: Nenhum dado é enviado para servidores externos
- **Backup**: Use a exportação CSV ou gere relatórios PDF para backup externo
- **Limite**: O armazenamento depende do espaço disponível no navegador (geralmente 5-10MB para dados + arquivos)

## 📱 Requisitos Técnicos

- Navegador moderno com suporte a:
  - LocalStorage
  - FileReader API (para upload de arquivos)
  - Service Workers (para funcionamento offline)
- Funciona 100% offline após primeiro carregamento
- Otimizado para mobile (Android/iOS) e desktop

## 🔒 Segurança e Privacidade

- ✅ Dados armazenados apenas localmente no dispositivo
- ✅ Sem sincronização em nuvem (a menos que você configure)
- ✅ Sem rastreamento ou analytics externos
- ⚠️ **Importante**: Faça backups periódicos via exportação CSV

## 📊 Categorias Disponíveis

### Entradas
- Repasse do Comando
- Arrecadação
- Multas/Infrações
- Doações
- Reembolso
- Outros

### Saídas
- Diárias
- Combustível
- Manutenção de Viaturas
- Material de Consumo
- Serviços Terceirizados
- Manutenção de Armamento
- Uniformes e Equipamentos
- Alimentação
- Saúde/Médico
- Transporte/Fretes
- Outros

## 🛠️ Tecnologias

- HTML5 Semântico
- CSS3 (Grid, Flexbox, Variáveis CSS)
- JavaScript ES6+ (Vanilla, sem frameworks)
- LocalStorage para persistência de dados
- Service Worker para PWA e funcionamento offline
- FileReader API para manipulação de arquivos

## 📞 Suporte

Em caso de dúvidas ou problemas, entre em contato com o desenvolvedor.

---
**15º Batalhão de Polícia Militar**  
Sistema de Gestão Financeira - 2024
