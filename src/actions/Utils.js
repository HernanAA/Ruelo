export default genericListFetch = (_dispatch, _type, typeSuccess, typeFail, url) => {
    
        return (_dispatch) => {
            alert(url)
            _dispatch({ type: _type });
    
            //var url = getUrl();
            
            fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => {
                    return response.json()
                })
                .then((rjson) => {
                    if (rjson !== null) {
                        _dispatch({ type: typeSuccess, payload: { list: rjson } });
                    }
                    else {
                        _dispatch({ type: typeSuccess, payload: { list: [] } });
                    }
                })
                .catch((error) => {
                    console.error(error)
                    _dispatch({ type: typeFail, payload: { error: 'Ha ocurrido un error al cargar: ' + _type } })
                })
        }
    };