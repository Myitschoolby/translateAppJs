const translatingApp = function() {
    const form = document.querySelector('.translating_form'),
        result = document.querySelector('.translating_result');

    if (!form || !result) return;

    const showTranslate = function(output) {
        if (!output) return;

        result.innerHTML = output;
    };

    const translate = async function(source, target, input) {
        const url = 'https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate',
            search = `?source=${source}&target=${target}&input=${input}`;

        await fetch(url + search, {
            headers: {
                "X-RapidAPI-Host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
                "X-RapidAPI-Key": "6b40151720msh907cf6866d59576p180a0ejsnf4444e49aba1"
            }
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            showTranslate(result.outputs[0].output);
        });
    };

    const button = form.querySelector('button'),
        source = form.querySelector('[name="source"]'),
        target = form.querySelector('[name="target"]'),
        input = form.querySelector('[name="input"]');

    if (!button||
        !source ||
        !target ||
        !input) return;

    button.addEventListener('click', function() {
        if (!source.value ||
            !target.value ||
            !input.value) return;
        
        translate(source.value, target.value, input.value);
    });
};

window.addEventListener('load', translatingApp);