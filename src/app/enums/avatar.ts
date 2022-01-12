export enum Avatar {
    balloons = 'balloons',
    tentacle = 'tentacle',
    saturn = 'saturn',
    bat = 'bat',
    rocket = 'rocket',
    superman = 'superman',
    posing = 'posing',
} 
export function geAvatarUrls(name: string) {
    switch (name) {
        case 'balloons': return'/assets/images/avatars/balloons.svg';
        case 'tentacle': return'/assets/images/avatars/tentacle.svg';
        case 'saturn': return'/assets/images/avatars/saturn.svg';
        case 'bat': return'/assets/images/avatars/bat.svg';
        case 'rocket': return'/assets/images/avatars/rocket.svg';
        case 'superman': return'/assets/images/avatars/superman.svg';
        case 'posing': default: return'/assets/images/avatars/posing.svg';
    }
}

