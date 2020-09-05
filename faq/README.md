# Perguntas frequentes

## Como é a garantia do "Autista para Autista"?

O “dono do patrimònio” é um coletivo com 50% ou mais autistas. Esse coletivo é previsto no nosso Código Civil, no capítulo VI, na seção I o título “Condomínio Voluntário” ([artigos 1.314 a 1.326](http://www.planalto.gov.br/ccivil_03/Leis/2002/L10406.htm#parteespeciallivroiiitituloiiicapitulovise%C3%A7aoi)). Não é muito diferente de um condomínio de moradia (edilício), mas se aplica apenas a o que não é imóvel.

![](../assets/img/condominioVoluntario.png)

&nbsp; (detalhes sobre o [conceito de Condomínio Voluntário](https://medium.com/@peterkrauss/condom%C3%ADnio-volunt%C3%A1rio-a-propriedade-comum-que-descentraliza-os-direitos-da-propriedade-privada-5bc92081fd82))

## O sistema está restrito a alguma especialidade?

Não há restrição de assunto, basta que as *tags* existam na [Wikidata](http://wikidata.org), e mesmo que não existam, a Wikidata permite adicionar.
Alguns exemplos de tags e suas categorias:

* [_zoologia_](http://www.wikidata.org/entity/Q431), tags:
   - [ornitologia](http://www.wikidata.org/entity/Q44703) (stack-Biology/[ornithology](https://biology.stackexchange.com/tags/ornithology))
	 - [parasitologia](http://www.wikidata.org/entity/Q180502) (stack-Biology/[parasitology](https://biology.stackexchange.com/tags/parasitology))

* [_Windows NT_](http://www.wikidata.org/entity/Q486487), tags:
  - [Windows 8](http://www.wikidata.org/entity/Q5046) (stack-geral/[windows-8](https://stackoverflow.com/tags/windows-8))
	  - [Windows XP](http://www.wikidata.org/entity/Q11248) (stack-geral/[windows-xp](https://stackoverflow.com/tags/windows-xp))

Os links externos como StackOverflow não são necessários, e podem ser para outros sites de controle.
O apelo tecnológico fica por conta do reuso de sites como StackOverflow onde podemos "puxar" o perfil do usuário automaticamente, resgatando a sua pontuação como grau de domínio.

**Exemplos completos**, já implementados com PostgREST:

* [`/_sql/skill_tag`](http://hacka.c-qr.org/_sql/skill_tag?limit=50&offset=100) ([completo](http://hacka.c-qr.org/_sql/skill_tag))

* [`/_sql/vw01consolid_skill_tag`](http://hacka.c-qr.org/_sql/vw01consolid_skill_tag?limit=50&offset=100) ([completo](http://hacka.c-qr.org/_sql/vw01consolid_skill_tag))

* [`/_sql/vw02bycat_skill_tag`](http://hacka.c-qr.org/_sql/vw02bycat_skill_tag?limit=50&offset=100) ([completo](http://hacka.c-qr.org/_sql/vw02bycat_skill_tag))

## Como carregar automaticamente as minhas tags de sites como o StackOverflow?
Suponha o [usuário 287948 do StackOverflow](https://stackoverflow.com/users/287948).

## Quais atributos mais são amarrados à tags para dar peso?

## Como é feito o casamento candidato-vaga?

## Como o cliente pode ser informado automaticamente das novidades?
Além do site, a principal ferramenta de apoio ao candidato ou empresa que deseja estar "plugado"
nas novidades é o [_Web feed_](https://en.wikipedia.org/wiki/Web_feed), especificamente a nossa API NGINX+PostgREST implementaria um [JSON Feed](https://en.wikipedia.org/wiki/JSON_Feed).

------

* [`/ws`](ws):  web services (*back-end*), implementados como API [PostgREST](http://postgrest.org/en/v7.0.0/).
* [`/specs`](specs): especificação formal do workflow e APIs.
* [`/faq`](faq): perguntas e respostas frequentes sobre como funciona ou como usar.

## Quais as principais tecnologias?

* [React](https://reactjs.org/)
* [PostgREST](http://postgrest.org/en/v7.0.0/)
* [PostgreSQL](https://www.postgresql.org/)

## Como e porque ser transparente?
A transparência fiscal é muito importante num Condomínio, pode ser conseguida  por exemplo pela publicação dos extratos bancários. Todos os atos (assembleias e votações das curadorias) são obrigatoriamente publicados.

## O que são as curadorias?
São grupos mistos de condôminos-voluntários, condôminos

* **Curadoria de candidatos**: apenas para evitar "vandalismo" por avaliação humana. Como subproduto avalia-se a qualidade dos dados e a necessidade de modificação nos formulários.

* **Curadoria de empresas**: além de  evitar "vandalismo" por avaliação humana, ajuda a manter a qualidade das manifestações anônimas estilo GlassDoor.

* **Curadoria dos recursos indicados**:
  - profissionais da saúde indicados: requer votação de regras gerais (por exemplo "aceitar pscicólogos freudianos ou apenas comportamentalistas?"), métodos objetivos (dados de indicação da  "rede de confiança") e indicações diretas.   
  - suporte e demais serviços

## Indicação de profissionais da saúde capacitados

Monitoramento da progrressão e desenvolviento do candidato na vaga.

## Roadmap?

Momentos do projeto em função da **conquista de metas** e **capacidade da equipe**, ou seja, em função da [maturidade](https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration) do empreendimento:

1. **Piloto**: trabalho com vagas e candidatos controlados ("casamentos arranhados")

2. **Inicio**: em produção, foco em poucos nichos, suporte e apoio intensivos para aperfeiçoar e validar padrões adotados.

3. **Consolidação**: ampliar nichos e aperfeiçoar a plataforma, os recursos humanos, etc. inclui a apresentação de estatísticas e tendências. Abrir para vagas temporárias.

4. **Otimização**: ampliar as funcionalidades e buscar novos desafios. Exemplos:<br/> * liberar as visualizações de currículos de "pessoas públicas" (autistas que já fazem divulgação no LinkedIN, etc.)<br/> * novas  fazer uso dos dados estatísticos em consultorias pagas pelas empresas;  <br/> * incluir a marcação semântica nos currículos<br/> * fazer conversão automática de texto livre em formulário pré-preenchido.

<!-- processos seletivos adaptados -->
