import React from 'react'

export function BrandFilter () {
    return (
        <div className="widget brands mb-50">
                <h6 className="widget-title mb-30">Brands</h6>
                <div className="widget-desc">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="amado"/>
                        <label className="form-check-label" for="amado">Amado</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="ikea"/>
                        <label className="form-check-label" for="ikea">Ikea</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="furniture"/>
                        <label className="form-check-label" for="furniture">Furniture Inc</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="factory"/>
                        <label className="form-check-label" for="factory">The factory</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="artdeco"/>
                        <label className="form-check-label" for="artdeco">Artdeco</label>
                    </div>
                </div>
        </div>
    )
}