import React from 'react'
import Progress from '../progress'
import './TagsComponent.css'

const TagsComponent = props => {
  return (
    <div className='tags--container'>
      <div className='tags-root'>
        <div className='tags-left'>
          {/* check box */}

          <div className='tags-left--check'>
            <div className='left-first--check'>
              <input
                className='styled-checkbox'
                id='styled-checkbox-1'
                type='checkbox'
                value='value1'
              />
              <label for='styled-checkbox-1'></label>
            </div>
            <div>
              <input
                className='styled-checkbox'
                id='styled-checkbox-2'
                type='checkbox'
                value='value2'
                checked
              />
              <label for='styled-checkbox-2'></label>
            </div>
          </div>

          {/* toggle buttons */}

          <div className='tags-left--switch'>
            <div className='left-first--switch'>
              <input className='switch__input' type='checkbox' id='checkbox1' />
              <label id='switch__label' for='checkbox1'></label>
            </div>
            <div>
              <input className='switch__input' type='checkbox' id='checkbox2' />
              <label id='switch__label' for='checkbox2'></label>
            </div>
          </div>
        </div>

        <div className='tags-right'>
          {/* radio buttons */}
          <div className='radio1'>
            <form action='#' className='radio-root'>
              <div className='right-first--radio'>
                <input type='radio' id='test1' name='radio-group' checked />
                <label for='test1'></label>
              </div>
              <div>
                <input type='radio' id='test2' name='radio-group' />
                <label for='test2'></label>
              </div>
            </form>
          </div>

          {/* increase buttons */}
          <div className='increment-btn--container'>
            <button className='minusBtn'>-</button>
            <div className='count'>1</div>
            <button className='plusBtn'>+</button>
          </div>
        </div>
      </div>
      <div className='progress-container'>
        <Progress />
      </div>
    </div>
  )
}

export default TagsComponent
