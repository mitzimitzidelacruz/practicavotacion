/** aqui empezamos a hacer la Clase para y de las Pregunta */

class Pregunta {
    //Propiedades de la pregunta
        favor= 0;
        contra= 0;
        abstener= 0;
        pregunta= '';

    //Metodos para los resultados 
    agregarResultados(favor, contra, abs) {
        const div= document.createElement('div');

        div.classList= 'container';
        div.innerHTML= `<table class="table table-striped mt-2 mx-2">
                            <tr>
                                <td>A favor: ${favor}</td>
                            </tr>
                            <tr>
                                <td>En contra: ${contra}</td>
                            </tr>
                            <tr>
                                <td>Se abstienen de responder: ${abs}</td>
                            </tr>
                        </table>`

        return div;
    }
}