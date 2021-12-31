const tf = require('@tensorflow/tfjs-node');

function normalized(data){ // i & r
    x1 = (data[0] - 12.585) / 6.813882
    x2 = (data[1] - 51.4795) / 29.151289
    x3 = 
    return [i, r]
}

function denormalized(data){
    y1 = (data[0] * 552.6264) + 650.4795
    y2 = (data[1] * 12153.8) + 10620.5615
    y3 =
    return [v, p]
}


async function predict(data){
    let in_dim = 2;
    
    data = normalized(data);
    shape = [1, in_dim];

    tf_data = tf.tensor2d(data, shape);

    try{
        // path load in public access => github
        const path = 'https://raw.githubusercontent.com/zendi014/jst_service/main/public/ex_model/model.json';
        const model = await tf.loadGraphModel(path);
        
        predict = model.predict(
                tf_data
        );
        result = predict.dataSync();
        return denormalized( result );
        
    }catch(e){
      console.log(e);
    }
}

module.exports = {
    predict: predict 
}
  
