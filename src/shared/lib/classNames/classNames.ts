export const classNames = (
    mainClass: string,
    mods: Record<string, boolean | string> = {},
    additional: string[] = [],
) => {
    const optionalClassnames = Object.entries(mods)
        .filter(([key, value]) => value)
        .map(([key, value]) => key);

    return [mainClass, ...optionalClassnames.filter(Boolean), ...additional]
        .join(' ');
};
