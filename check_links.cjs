const fs = require('fs');
const path = require('path');
const { glob, globSync } = require('glob');

const projectRoot = 'c:/Users/quent/alky-nippon';
const srcDir = path.join(projectRoot, 'src');

async function run() {
    const files = await glob('**/*.svelte', { cwd: srcDir, windowsPathsNoEscape: true });
    
    const links = new Set();
    const routeDirs = new Set(
        globSync('**/*/', { cwd: path.join(srcDir, 'routes'), windowsPathsNoEscape: true })
            .map(d => '/' + d.replace(/\\/g, '/').replace(/\/$/, ''))
    );
    routeDirs.add('/'); // root route

    files.forEach(file => {
        const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        const matches = content.matchAll(/href="([^"]+)"/g);
        for (const match of matches) {
            links.add({link: match[1], file: file});
        }
    });

    const issues = [];
    links.forEach(({link, file}) => {
        if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('{')) {
            return; // Skip
        }
        
        let pathName = link.split('#')[0].split('?')[0];
        
        if (pathName === '') return;
        
        if (pathName.endsWith('/') && pathName.length > 1) {
            pathName = pathName.slice(0, -1);
        }

        const isStatic = fs.existsSync(path.join(projectRoot, 'static', pathName));
        const routePath = path.join(srcDir, 'routes', pathName === '/' ? '' : pathName);
        
        const hasRoute = fs.existsSync(routePath) || globSync(`**/\\[*\\]`, { cwd: path.join(srcDir, 'routes'), windowsPathsNoEscape: true }).some(d => {
            const regex = new RegExp('^/' + d.replace(/\\/g, '/').replace(/\[[^\]]+\]/g, '[^/]+') + '$');
            return regex.test(pathName);
        });

        if (!isStatic && !hasRoute) {
            issues.push({ link, file });
        }
    });

    console.log("Broken links found:");
    issues.forEach(i => console.log(`${i.file}: ${i.link}`));
}

run();
