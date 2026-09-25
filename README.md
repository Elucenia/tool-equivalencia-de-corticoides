# Equivalência de corticoides

Identificador: `equivalencia-de-corticoides`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **restricted**. O resultado principal converte a dose de um medicamento em outro por potência aproximada, sem via, indicação ou duração. A equivalência não determina substituição, retirada ou segurança adrenal; o limiar de risco presente nas dicas importadas também precisa atualização.
- Execução: **desativada; o adaptador retorna REVIEW_REQUIRED**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/clinica.php`.
- 4/4 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

As equivalências de glicocorticoides são aproximações de potência biológica, não mera conversão de unidades. Não definem desmame nem substituição automática de fármacos.

A transcrição acima documenta o acervo de origem e pode requerer atualização. Revisão documental: https://support.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency

## Condições e limites

Converte a dose de um glicocorticoide sistêmico na dose equivalente dos outros, pela potência anti-inflamatória (glicocorticoide).

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Liu D et al. A practical guide to the monitoring and management of the complications of systemic corticosteroid therapy. Allergy Asthma Clin Immunol, 2013.](https://doi.org/10.1186/1710-1492-9-30)
- [Meikle AW, Tyler FH. Potency and duration of action of glucocorticoids. Am J Med, 1977.](https://doi.org/10.1016/0002-9343(77)90233-9)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
