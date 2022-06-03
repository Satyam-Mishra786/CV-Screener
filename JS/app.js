console.log('This is CV Screener');

const name = document.getElementById('name');
const age = document.getElementById('age');
const city = document.getElementById('city');
const language = document.getElementById('language');
const framework = document.getElementById('framework');
const image = document.getElementById('image');
const nextBtn = document.getElementById('nextBtn');

const data = [

    {
        name: 'Shubham Kumar',
        age: 18,
        city: 'Bihar',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },

    {
        name: 'Shivani Kumari',
        age: 22,
        city: 'Rajasthan',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/72.jpg'
    },

    {
        name: 'Rohit Kumar',
        age: 19,
        city: 'Uttar Pradesh',
        language: 'C++',
        framework: 'Unreal',
        image: 'https://randomuser.me/api/portraits/men/65.jpg'
    },

    {
        name: 'Shiva Sharma',
        age: 28,
        city: 'Jharkhand',
        language: 'JavaScript',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/55.jpg'
    },

    {
        name: 'Shubham Kumar',
        age: 24,
        city: 'Bihar',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },

];

// CV Iterator
function cvIterator(values) {
    let nextIndex = 0;
    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    values: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    values: null,
                    done: true
                }
            }
        }
    }
}

nextBtn.addEventListener('click', changeApplicant);

let cv = cvIterator(data);
changeApplicant();

function changeApplicant() {

    user = cv.next();
    if (!user.done) {
        name.innerHTML = 'Name : ' + user.values.name;
        age.innerHTML = user.values.age + ' years old';
        city.innerHTML = 'Lives in ' + user.values.city;
        language.innerHTML = 'Primarly works on ' + user.values.language;
        framework.innerHTML = 'In ' + user.values.framework + ' framework';
        image.src = `${user.values.image}`;
    }
    else {
        window.location.reload();
    }
}