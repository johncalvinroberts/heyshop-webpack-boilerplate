//Write any es6 javascript here

const engineers = [
  {
    name: '习近平',
    language: 'javascript'
  },
  {
    name: '吴亦凡',
    language: 'php'
  },
  {
    name: '水原希子',
    language: 'javascript'
  },
  {
    name: '旺财',
    language: 'php'
  },
  {
    name: '大黄',
    language: 'ruby'
  }
]


function createMarkup (engineer) {
  return `
    <div class="engineer-parent" style="color: ${engineer.language === 'ruby' ? 'red' : ''};">
      <div>工程师: ${engineer.name}</div>
      <div>语言： ${engineer.language}</div>
    </div>
    <br/>
  `
}
const engineersMarkup = engineers.map(engineer => createMarkup(engineer)).join('')
document.body.innerHTML = engineersMarkup
