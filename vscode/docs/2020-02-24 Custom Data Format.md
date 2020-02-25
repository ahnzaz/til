# [Custom data format](https://code.visualstudio.com/blogs/2020/02/24/custom-data-format)

## Using custom data format
VS code provides information about HTML/CSS entities in auto-completion and hovers information
![HTML/CSS hover](https://code.visualstudio.com/assets/blogs/2020/02/24/html-css-language-features.png)

`html.html-data.json` 파일을 통해 custom element를 정의할 수 있음
```json
{
    "version": 1.1,
    "tags":[
        {
            "names":"my-button",
            "description":"My button. You should use it as in `<my-button type='alert'></my-button>`.",
            "reference":[
                {
                    "name":"Bootstrap buttons",
                    "url":"https://getbootstrap.com/docs/4.0/components/buttons/"
                }
            ]
        }
    ]
}
```

그리고 setting에 `html.customData` 값에 파일 경로를 지정한다.

![Custom element hover information](https://code.visualstudio.com/assets/blogs/2020/02/24/custom-data-helloworld.png)

## Sharing custom data through extensions

## Using custom data for language servers
`vscode-html-languageservice`와 `vscode-css-languageservice` library를 통해 extension에서 HTML과 CSS 확장을 쉽게 개발할 수 있다.

```ts
import { getLanguageService } from 'vscode-html-languageservice'

getLanguageService({
    customDataProvider: [...]
})
```

빌트인 HTML language server에는 여러 소스로부터 수집한 CustomData 세트를 API로 제공한다. 수집한 소스는 아래와 같다.

- W3C specification of HTML, CSS, WAI-ARIA
- MDN
- Mozilla's mdn-data, mdn-browser-compat-data package

위 정보는 [NPM](https://www.npmjs.com/package/vscode-web-custom-data) package로 배포되어있음.