import { SiteData } from "../interfaces/SiteData";
import { genericHTML } from "../templates/index.template";
import path from 'path';
import fs from 'fs';
import { GeneratorConfig } from "../interfaces/GeneratorConfig";

export class HTMLGenerator
{

    private _siteData: SiteData;
    private _generatorConfig: GeneratorConfig;

    constructor(siteData: SiteData, generatorConfig: GeneratorConfig)
    {
        this._siteData = siteData;
        this._generatorConfig = generatorConfig;
    }

    public generateStaticHTML(filename: string): void
    {
        const htmlContent = genericHTML(this._siteData);
        const outputDir = path.resolve(__dirname, this._generatorConfig.outDir)
        const outputPath = path.join(outputDir, filename + '.html');

        if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputPath, htmlContent);
        console.log('HTML GENERATED IN> ' + outputPath);
        
    }

}