db = new Mongo().getDB("RnHealthDB");

db.createCollection("FloorBase");
db.createCollection("FloorFinish");
db.createCollection("WallBase");
db.createCollection("WallFinish");
db.createCollection("Admin");
db.createCollection("NUTSRegions");

db.FloorBase.insertMany([
  {
    value: "BETAO",
    viewValue: "Betão",
  },
  {
    value: "BETONILHA",
    viewValue: "Betonilha",
  },
  {
    value: "GRANITO",
    viewValue: "Granito",
  },
  {
    value: "LAJE",
    viewValue: "Laje",
  },
  {
    value: "PEDRA",
    viewValue: "Pedra",
  }
]);

db.FloorFinish.insertMany([
  {
    value: "ALCATIFA",
    viewValue: "Alcatifa",
  },
  {
    value: "EPOXI",
    viewValue: "Epóxi",
  },
  {
    value: "GRANITO",
    viewValue: "Granito",
  },
  {
    value: "LADRILHO",
    viewValue: "Ladrilho",
  },
  {
    value: "LINOLEO",
    viewValue: "Linóleo",
  },
  {
    value: "MADEIRA",
    viewValue: "Madeira",
  },
]);

db.WallBase.insertMany([
  {
    value: "BETAO",
    viewValue: "Betão",
  },
  {
    value: "GRANITO",
    viewValue: "Granito",
  },
  {
    value: "PEDRA",
    viewValue: "Pedra",
  },
  {
    value: "TIJOLO",
    viewValue: "Tijolo",
  },
]);

db.WallFinish.insertMany([
  {
    value: "AZULEJO",
    viewValue: "Azulejo",
  },
  {
    value: "GESSO",
    viewValue: "Gesso",
  },
  {
    value: "MADEIRA",
    viewValue: "Madeira",
  },
  {
    value: "REBOCO",
    viewValue: "Reboco",
  },
]);



db.NUTSRegions.insertMany([{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Águeda"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Albergaria-a-Velha"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Anadia"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Aveiro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Estarreja"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Ílhavo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Murtosa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Oliveira do Bairro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Ovar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Sever do Vouga"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Aveiro",
  "district": "Aveiro",
  "municipality": "Vagos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Arganil"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Cantanhede"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Coimbra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Condeixa-a-Nova"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Figueira da Foz"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Góis"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Lousã"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Aveiro",
  "municipality": "Mealhada"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Mira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Miranda do Corvo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Montemor-o-Velho"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Viseu",
  "municipality": "Mortágua"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Oliveira do Hospital"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Pampilhosa da Serra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Penacova"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Penela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Soure"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Tábua"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Coimbra",
  "district": "Coimbra",
  "municipality": "Vila Nova de Poiares"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Batalha"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Leiria"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Marinha Grande"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Pombal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Porto de Mós"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Alvaiázere"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Ansião"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Castanheira de Pera"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Figueiró dos Vinhos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Região de Leiria",
  "district": "Leiria",
  "municipality": "Pedrógão Grande"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Guarda",
  "municipality": "Aguiar da Beira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Carregal do Sal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Castro Daire"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Mangualde"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Nelas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Oliveira de Frades"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Penalva do Castelo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Santa Comba Dão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "São Pedro do Sul"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Sátão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Tondela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Vila Nova de Paiva"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Viseu"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Viseu Dão Lafões",
  "district": "Viseu",
  "municipality": "Vouzela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Almeida"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Castelo Branco",
  "municipality": "Belmonte"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Celorico da Beira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Castelo Branco",
  "municipality": "Covilhã"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Figueira de Castelo Rodrigo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Fornos de Algodres"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Castelo Branco",
  "municipality": "Fundão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Gouveia"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Guarda"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Manteigas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Mêda"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Pinhel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Sabugal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Seia"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beiras e Serra da Estrela",
  "district": "Guarda",
  "municipality": "Trancoso"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Castelo Branco"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Idanha-a-Nova"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Oleiros"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Penamacor"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Proença-a-Nova"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Beira Baixa",
  "district": "Castelo Branco",
  "municipality": "Vila Velha de Ródão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Alcobaça"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Alenquer"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Arruda dos Vinhos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Bombarral"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Cadaval"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Caldas da Rainha"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Lourinhã"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Nazaré"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Óbidos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Leiria",
  "municipality": "Peniche"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Sobral de Monte Agraço"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Oeste",
  "district": "Lisboa",
  "municipality": "Torres Vedras"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Abrantes"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Alcanena"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Constância"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Entroncamento"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Ferreira do Zêzere"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Mação"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Ourém"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Sardoal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Castelo Branco",
  "municipality": "Sertã"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Tomar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Torres Novas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Castelo Branco",
  "municipality": "Vila de Rei"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Centro",
  "nutsIII": "Médio Tejo",
  "district": "Santarém",
  "municipality": "Vila Nova da Barquinha"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Arcos de Valdevez"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Caminha"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Melgaço"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Monção"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Paredes de Coura"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Ponte da Barca"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Ponte de Lima"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Valença"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Viana do Castelo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Minho",
  "district": "Viana do Castelo",
  "municipality": "Vila Nova de Cerveira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Amares"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Barcelos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Braga"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Esposende"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Terras de Bouro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Cávado",
  "district": "Braga",
  "municipality": "Vila Verde"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Cabeceiras de Basto"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Fafe"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Guimarães"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Vila Real",
  "municipality": "Mondim de Basto"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Póvoa de Lanhoso"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Vieira do Minho"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Vila Nova de Famalicão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Ave",
  "district": "Braga",
  "municipality": "Vizela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "Arouca"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "Espinho"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Gondomar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Maia"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Matosinhos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "Oliveira de Azeméis"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Paredes"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Porto"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Póvoa de Varzim"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "Santa Maria da Feira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Santo Tirso"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "São João da Madeira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Trofa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Aveiro",
  "municipality": "Vale de Cambra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Valongo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Vila do Conde"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Área Metropolitana do Porto",
  "district": "Porto",
  "municipality": "Vila Nova de Gaia"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Amarante"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Baião"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Aveiro",
  "municipality": "Castelo de Paiva"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Braga",
  "municipality": "Celorico de Basto"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Viseu",
  "municipality": "Cinfães"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Felgueiras"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Lousada"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Marco de Canaveses"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Paços de Ferreira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Porto",
  "municipality": "Penafiel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Tâmega e Sousa",
  "district": "Viseu",
  "municipality": "Resende"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Boticas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Chaves"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Montalegre"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Ribeira de Pena"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Valpaços"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Alto Tâmega",
  "district": "Vila Real",
  "municipality": "Vila Pouca de Aguiar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Alijó"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Armamar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Bragança",
  "municipality": "Carrazeda de Ansiães"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Bragança",
  "municipality": "Freixo de Espada à Cinta"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Lamego"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Mesão Frio"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Moimenta da Beira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Murça"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Penedono"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Peso da Régua"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Sabrosa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Santa Marta de Penaguião"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "São João da Pesqueira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Sernancelhe"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Tabuaço"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Viseu",
  "municipality": "Tarouca"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Bragança",
  "municipality": "Torre de Moncorvo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Guarda",
  "municipality": "Vila Nova de Foz Côa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Douro",
  "district": "Vila Real",
  "municipality": "Vila Real"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Alfândega da Fé"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Bragança"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Macedo de Cavaleiros"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Miranda do Douro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Mirandela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Mogadouro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Vila Flor"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Vimioso"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região do Norte",
  "nutsIII": "Terras de Trás-os-Montes",
  "district": "Bragança",
  "municipality": "Vinhais"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Alcochete"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Almada"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Amadora"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Barreiro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Cascais"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Lisboa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Loures"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Mafra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Moita"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Montijo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Odivelas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Oeiras"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Palmela"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Seixal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Sesimbra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Setúbal",
  "municipality": "Setúbal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Sintra"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Região de Lisboa",
  "nutsIII": "Área Metropolitana de Lisboa",
  "district": "Lisboa",
  "municipality": "Vila Franca de Xira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Almeirim"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Alpiarça"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Lisboa",
  "municipality": "Azambuja"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Benavente"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Cartaxo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Chamusca"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Coruche"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Golegã"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Rio Maior"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Salvaterra de Magos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Lezíria do Tejo",
  "district": "Santarém",
  "municipality": "Santarém"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Litoral",
  "district": "Setúbal",
  "municipality": "Alcácer do Sal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Litoral",
  "district": "Setúbal",
  "municipality": "Grândola"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Litoral",
  "district": "Beja",
  "municipality": "Odemira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Litoral",
  "district": "Setúbal",
  "municipality": "Santiago do Cacém"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Litoral",
  "district": "Setúbal",
  "municipality": "Sines"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Alter do Chão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Arronches"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Avis"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Campo Maior"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Castelo de Vide"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Crato"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Elvas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Fronteira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Gavião"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Marvão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Monforte"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Nisa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Ponte de Sor"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Portalegre"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alto Alentejo",
  "district": "Portalegre",
  "municipality": "Sousel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Alandroal"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Arraiolos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Borba"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Estremoz"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Évora"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Montemor-o-Novo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Mora"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Mourão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Portel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Redondo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Reguengos de Monsaraz"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Vendas Novas"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Viana do Alentejo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Alentejo Central",
  "district": "Évora",
  "municipality": "Vila Viçosa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Aljustrel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Almodôvar"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Alvito"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Barrancos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Beja"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Castro Verde"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Cuba"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Ferreira do Alentejo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Mértola"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Moura"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Ourique"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Serpa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Alentejo",
  "nutsIII": "Baixo Alentejo",
  "district": "Beja",
  "municipality": "Vidigueira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Albufeira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Alcoutim"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Aljezur"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Castro Marim"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Faro"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Lagoa"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Lagos"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Loulé"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Monchique"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Olhão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Portimão"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "São Brás de Alportel"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Silves"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Tavira"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Vila do Bispo"
},{
  "nutsI": "Portugal Continental",
  "nutsII": "Algarve",
  "nutsIII": "Algarve",
  "district": "Faro",
  "municipality": "Vila Real de Santo António"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Angra do Heroísmo"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Calheta"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Corvo"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Horta"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Lagoa"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Lajes das Flores"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Lajes do Pico"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Madalena"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Nordeste"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Ponta Delgada"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Povoação"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Praia da Vitória"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Ribeira Grande"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Santa Cruz da Graciosa"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Santa Cruz das Flores"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "São Roque do Pico"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Velas"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Vila do Porto"
},{
  "nutsI": "Região Autónoma dos Açores",
  "nutsII": "Região Autónoma dos Açores",
  "nutsIII": "Região Autónoma dos Açores",
  "municipality": "Vila Franca do Campo"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Calheta"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Câmara de Lobos"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Funchal"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Machico"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Ponta do Sol"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Porto Moniz"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Porto Santo"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Ribeira Brava"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Santa Cruz"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "Santana"
},{
  "nutsI": "Região Autónoma da Madeira",
  "nutsII": "Região Autónoma da Madeira",
  "nutsIII": "Região Autónoma da Madeira",
  "municipality": "São Vicente"
}])