//---TRAIGO LA INFO QUE NECESITO DE DOGS DE LA API---//
const dataApi = (respApi) => {
  return respApi.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      height_min: parseInt(e.height.metric.split("-")[0]),
      height_max: parseInt(e.height.metric.split("-")[1]),
      weight_min: parseInt(e.weight.metric.split("-")[0]),
      weight_max: parseInt(e.weight.metric.split("-")[1]),
      life_span: e.life_span,
      image: e.image.url,
      //crated: false
    };
  });
};

module.exports = { dataApi };
