export function UpdateGeometry(mesh, geometry) {
    mesh.geometry.dispose()

    mesh.geometry = geometry;
}