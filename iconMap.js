export const ICON_MAP = new Map()

addMaping([0, 1], "sun")
addMaping([2], "cloud-sun")
addMaping([3], "cloud")
addMaping([45, 48], "smog")
addMaping(
    [51, 53, 55, 56, 57, 61, 63, 66, 67, 80, 81, 82], 
    "cloud-showers-heavy"
)
addMaping([71, 73, 75, 77, 85, 86], "snowflake")
addMaping([95, 96, 99], "cloud-bolt")

function addMaping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    });
}

