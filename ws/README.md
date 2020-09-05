# Processos e implementações
...

## Captura e filtragem de dados

Captura através de query [SparQL](https://en.wikipedia.org/wiki/SPARQL)  na Wikidata, https://query.wikidata.org/
```sparql
	SELECT DISTINCT ?item ?itemLabel ?tagName ?instance ?instanceLabel
	WHERE
	{
	?item wdt:P1482 ?tagName.
	?item wdt:P31|wdt:P279 ?instance # ex. videogame
	SERVICE wikibase:label { bd:serviceParam wikibase:language "pt,en,[AUTO_LANGUAGE]". }
	}
	ORDER BY ?instanceLabel ?itemLabel
```
Ver [query montada aqui](https://query.wikidata.org/#%09SELECT%20DISTINCT%20%3Fitem%20%3FitemLabel%20%3FtagName%20%3Finstance%20%3FinstanceLabel%0A%09WHERE%0A%09%7B%09%09%0A%09%3Fitem%20wdt%3AP1482%20%3FtagName.%0A%09%3Fitem%20wdt%3AP31%7Cwdt%3AP279%20%3Finstance%20%23%20ex.%20videogame%0A%09SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22pt%2Cen%2C%5BAUTO_LANGUAGE%5D%22.%20%7D%0A%09%7D%0A%09ORDER%20BY%20%3FinstanceLabel%20%3FitemLabel%0ALIMIT%20500).

Os dados podem ser baixados como arquivo CSV e então serem resgatados pelo PostgreSQL. Na tabela final algumas colunas são renomeadas:
 *item=	tag_wikidataLink; 		itemLabel=	TAG;	tagName=	tag_stackLink;		instance=	categoria_link;		instanceLabel=	CATEGORIA*.

<!-- Dica de busca na Wikidata:		https://opendata.stackexchange.com/questions/16143/filtering-wikidata-search	-->

## Preparo da API e views

No PostreSQL temos:
```sql
create schema API;

create view api.skill_tag AS
  SELECT * FROM main.skill_tag
  ORDER BY categoria, tag;

create view api.vw01consolid_skill_tag AS
 SELECT tag,
    min(skill_tag.tag_wikidata_id) AS tag_wikidata_id,
    array_agg(DISTINCT skill_tag.categoria) AS categorias,
    array_agg(DISTINCT skill_tag.cat_wikidata_id) AS cat_wikidata_ids,
    array_agg(DISTINCT skill_tag.tag_stacklink) AS tag_stacklinks
   FROM main.skill_tag
  GROUP BY 1
  ORDER BY 1,2;

create view api.vw02bycat_skill_tag AS
  select categoria||'#'||cat_wikidata_id AS categoria, array_agg(distinct tag||'#'||tag_wikidata_id) as tags
  FROM main.skill_tag group by 1 order by 1;
```

## Exemplos

* http://hacka.c-qr.org/_sql/skill_tag?limit=50&offset=100
* http://hacka.c-qr.org/_sql/vw01consolid_skill_tag?limit=50&offset=100
* http://hacka.c-qr.org/_sql/vw02bycat_skill_tag?limit=50&offset=100
